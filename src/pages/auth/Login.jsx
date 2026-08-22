import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

export default function Login() {
  const { signIn, signOut } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { email, password } = formData;

    if (!email || !password) {
      setError('Email and password are required');
      setLoading(false);
      return;
    }

    try {
      const { data, error: supabaseError } = await signIn(email, password);
      if (supabaseError) throw supabaseError;

      // Check if email is verified
      const { user } = data;
      if (!user.email_confirmed_at) {
        // Email not verified, sign out and show error
        await signOut();
        setError('Please verify your email before signing in. A verification email has been sent.');
        setLoading(false);
        return;
      }

      // If we get here, email is verified and sign in was successful.
      // The AuthProvider will update the session and the App.jsx will redirect based on role.
      // We don't need to do anything else here.
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign in</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50 pl-10"
            >
              <span className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none text-gray-400">
                {showPassword ? (
                  <EyeOff className="h-4 w-4" onClick={() => setShowPassword(false)} />
                ) : (
                  <Eye className="h-4 w-4" onClick={() => setShowPassword(true)} />
                )}
              </span>
            </input>
          </div>
          {loading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          )}
          {!loading && error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus-ring-indigo-500 focus-ring-opacity-50"
            >
              Sign In
            </button>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}