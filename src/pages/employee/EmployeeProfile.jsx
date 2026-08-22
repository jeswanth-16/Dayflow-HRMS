import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';
import { Save, AlertTriangle, Info } from 'lucide-react';

export default function EmployeeProfile() {
  const { profile, loading: authLoading, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Initialize form with profile data
  useEffect(() => {
    if (!authLoading && profile) {
      setFormData({
        phone: profile.phone || '',
        address: profile.address || '',
      });
    }
  }, [authLoading, profile]);

  // If we are still loading (authLoading is true) or profile is null, show a loading message.
  if (authLoading || !profile) {
    return <div className="p-6">Loading profile...</div>;
  }

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
    setSuccess('');

    const { phone, address } = formData;

    try {
      const { error: profileError } = await updateProfile({ phone, address });
      if (profileError) throw profileError;

      setSuccess('Profile updated successfully.');
    } catch (err) {
      setError(err.message || 'An error occurred while updating the profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Employee Profile</h1>
        <p className="text-sm text-gray-500">View and update your personal information</p>
      </div>

      {/* Profile Display and Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">PERSONAL INFORMATION</h2>
            <div className="grid gap-4">
              <div className="grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <p className="text-lg font-medium text-gray-800">{profile.full_name || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                  <p className="text-lg font-medium text-gray-800">{profile.employee_id || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-lg font-medium text-gray-800 break-all">{profile.email || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus-ring focus-ring-indigo-200 focus-ring-opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">JOB INFORMATION</h2>
            <div className="grid gap-4">
              <div className="grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <p className="text-lg font-medium text-gray-800">{profile.department || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                  <p className="text-lg font-medium text-gray-800">{profile.designation || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
                  <p className="text-lg font-medium text-gray-800">{profile.joining_date ? new Date(profile.joining_date).toLocaleDateString() : 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status</label>
                  <p className="text-lg font-medium text-gray-800">{profile.employment_status || 'Not set'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Salary Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">SALARY INFORMATION</h2>
            <div className="grid gap-4">
              <div className="grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Basic Salary</label>
                  <p className="text-lg font-medium text-gray-800">{profile.basic_salary ? `$${parseFloat(profile.basic_salary).toLocaleString()}` : 'Not set'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4">
            {loading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            )}
            {!loading && error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            {!loading && success && (
              <p className="text-sm text-green-600">{success}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus-ring-indigo-500 focus-ring-opacity-50"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}