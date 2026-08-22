import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch profile from profiles table when session changes
  useEffect(() => {
    let fetchProfile = async () => {
      if (session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (!error && data) {
          setProfile(data)
        } else {
          // If no profile exists, we set to null and let the signup/create handle it.
          setProfile(null)
        }
      } else {
        setProfile(null)
      }
    }

    if (session) {
      fetchProfile()
    } else {
      setProfile(null)
    }
  }, [session])

  // Listen to auth state changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = useCallback(async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }, [])

  const signUp = useCallback(async (email, password, employeeId, role) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role,
          employee_id: employeeId,
        },
      },
    })
    return { data, error }
  }, [])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }, [])

  // Update profile in the database and update the local profile state
  const updateProfile = useCallback(async (updates) => {
    if (!session) return { error: { message: 'No active session' } }
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', session.user.id)

    if (!error) {
      // Update the local profile state optimistically
      setProfile(prev => ({ ...prev, ...updates }))
    }
    return { error }
  }, [session])

  const value = {
    user,
    session,
    profile,
    role: profile?.role ?? null,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  }

  if (loading) {
    return null // or a loading indicator, but we'll just not render children until ready
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}