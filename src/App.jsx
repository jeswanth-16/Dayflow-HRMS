import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { useAuth } from './context/AuthContext';

// Placeholder pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import VerifyEmail from './pages/auth/VerifyEmail';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import EmployeeProfile from './pages/employee/EmployeeProfile';
import EmployeeAttendance from './pages/employee/EmployeeAttendance';
import EmployeeLeave from './pages/employee/EmployeeLeave';
import EmployeePayroll from './pages/employee/EmployeePayroll';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEmployees from './pages/admin/AdminEmployees';
import AdminAttendance from './pages/admin/AdminAttendance';
import AdminLeaves from './pages/admin/AdminLeaves';
import AdminPayroll from './pages/admin/AdminPayroll';
import AdminReports from './pages/admin/AdminReports';

function App() {
  const { user, session, profile, loading } = useAuth();
  const role = profile?.role ?? null;
  const isAuthenticated = !!session;
  const isEmailVerified = session?.user?.email_confirmed_at !== null; // Supabase returns null if not confirmed

  // If still loading, show a loading indicator or null
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated and trying to access protected routes
  // We'll handle this in each route element using a wrapper function

  const requireAuth = (element, requiredRole) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    if (!isEmailVerified) {
      return <Navigate to="/verify-email" replace />;
    }
    if (requiredRole && profile?.role !== requiredRole) {
      // If role doesn't match, redirect to appropriate dashboard
      return <Navigate to={profile?.role === 'hr' ? '/admin' : '/employee'} replace />;
    }
    return element;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Auth routes */}
          <Route path="/login" element={
            isAuthenticated ? <Navigate to={profile?.role === 'hr' ? '/admin' : '/employee'} replace /> : <Login />
          } />
          <Route path="/signup" element={
            isAuthenticated ? <Navigate to={profile?.role === 'hr' ? '/admin' : '/employee'} replace /> : <Signup />
          } />
          <Route path="/verify-email" element={
            isAuthenticated && isEmailVerified ? <Navigate to={profile?.role === 'hr' ? '/admin' : '/employee'} replace /> : <VerifyEmail />
          } />

          {/* Employee routes */}
          <Route path="/employee" element={requireAuth(<EmployeeDashboard />, 'employee')} />
          <Route path="/employee/profile" element={requireAuth(<EmployeeProfile />, 'employee')} />
          <Route path="/employee/attendance" element={requireAuth(<EmployeeAttendance />, 'employee')} />
          <Route path="/employee/leave" element={requireAuth(<EmployeeLeave />, 'employee')} />
          <Route path="/employee/payroll" element={requireAuth(<EmployeePayroll />, 'employee')} />

          {/* Admin routes */}
          <Route path="/admin" element={requireAuth(<AdminDashboard />, 'hr')} />
          <Route path="/admin/employees" element={requireAuth(<AdminEmployees />, 'hr')} />
          <Route path="/admin/attendance" element={requireAuth(<AdminAttendance />, 'hr')} />
          <Route path="/admin/leaves" element={requireAuth(<AdminLeaves />, 'hr')} />
          <Route path="/admin/payroll" element={requireAuth(<AdminPayroll />, 'hr')} />
          <Route path="/admin/reports" element={requireAuth(<AdminReports />, 'hr')} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;