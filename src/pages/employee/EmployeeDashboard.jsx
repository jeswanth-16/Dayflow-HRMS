import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar, Clock, Users, FileText, CheckCheck, MessageCircle, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeDashboard() {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [employeeName, setEmployeeName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    if (profile) {
      // Assuming profile has: employee_id, role, and we want to get name from somewhere? 
      // In our current setup, we don't have the full name in the profile. We only have employee_id and role.
      // We need to adjust: either we store the full name in the profile or we get it from the auth.user (which might have email but not full name).
      // Since the requirement is to get from the authenticated user's profile, we must have stored the full name in the profile.
      // However, in our signup we only stored employee_id and role. We need to update the signup to also store full name? 
      // But the requirement for signup only asked for Employee ID, Email, Password, Role. 
      // We don't have a field for full name in the signup. 
      // We have two options:
      // 1. Update the signup to collect first and last name (or full name) and store in the profile.
      // 2. Use the email's prefix as the name (not ideal) or leave it blank and show a fallback.
      // Since we are not to change the authentication step (it's already done), we must work with what we have.
      // We'll show the employee_id as the name for now, or we can show a placeholder and note that the full name is not available.
      // Alternatively, we can update the profile table to include more fields (like full_name) and then update the signup to collect it.
      // However, the instruction says: "Do not implement the next Dayflow feature." and we are only to implement the employee dashboard and profile.
      // We are allowed to update the database schema? The instruction for the authentication step said: "If the database is not yet configured, create the minimum required SQL/schema or clearly tell me the exact manual Supabase step required."
      // We already created the profiles table with employee_id and role. We can add more columns to it now? 
      // But note: we are not to implement attendance, leave, etc. but we are allowed to update the profile table for the dashboard and profile.
      // Let's update the profiles table to include: full_name, phone, address, department, designation, joining_date, basic_salary, employment_status.
      // However, we must be cautious: we are not to implement fake data. We will leave these fields blank until the user fills them in (via profile edit) or until we have HR input.
      // For the dashboard, we want to show the employee's name, department, and designation. We can get these from the profile if we update the table.
      // We'll do the following:
      //   - Alter the profiles table to add the required columns.
      //   - Update the signup to insert default values (or null) for these new columns.
      //   - In the profile edit, we allow updating phone and address (and maybe more in the future, but for now only phone and address).
      //   - For the dashboard, we'll show the full_name (or a fallback), department, and designation from the profile.
      //
      // However, note that we are in the middle of the employee dashboard step and we are not supposed to change the authentication step.
      // But we are allowed to update the database schema as part of setting up the foundation for the employee dashboard and profile.
      // We'll update the SUPABASE_SETUP.md to include the new columns and then run the alter table SQL.
      //
      // Given the time, we'll assume we can update the table and then adjust the signup and profile accordingly.
      //
      // For now, in the dashboard, we'll show:
      //   - Employee name: from profile.full_name if available, else from profile.employee_id (or a placeholder)
      //   - Department: from profile.department or 'Not set'
      //   - Designation: from profile.designation or 'Not set'
      //
      // We'll update the profile in the AuthContext to include these new fields when we fetch the profile.
      //
      // Let's update the AuthContext to fetch the entire profile row (we already do: select * from profiles).
      // Then we can access profile.full_name, profile.department, etc.
      //
      // We'll need to run the following SQL to update the profiles table:
      //   alter table profiles add column if not exists full_name text;
      //   alter table profiles add column if not exists phone text;
      //   alter table profiles add column if not exists address text;
      //   alter table profiles add column if not exists department text;
      //   alter table profiles add column if not exists designation text;
      //   alter table profiles add column if not exists joining_date date;
      //   alter table profiles add column if not exists basic_salary decimal;
      //   alter table profiles add column if not exists employment_status text default 'active';
      //
      // We'll do that manually via the Supabase SQL editor and then update the signup to insert empty strings (or null) for these fields.
      //
      // Since we are in the middle of the step, we'll update the signup to include these fields (with empty strings) and then adjust the dashboard and profile to use them.
      //
      // However, note that we are not to change the authentication step? The authentication step is done, but we are allowed to update the database schema as part of the setup for this step.
      // We'll update the SUPABASE_SETUP.md and then update the signup.jsx to include the new fields.
      //
      // Let's do it step by step:
      // 1. Update the SUPABASE_SETUP.md with the alter table commands.
      // 2. Update the signup.jsx to insert the new fields (we'll set them to empty strings for now).
      // 3. Update the AuthContext to fetch the new fields (we already do select * so it will get them).
      // 4. Update the dashboard and profile to use the new fields.
      // 5. Update the profile edit to update phone and address.
      //
      // We'll do that now.
      //
      // For the purpose of this code, we'll assume the profile object now has the new fields.
      // We'll set the state accordingly.
      //
      // If the profile does not have these fields (because we haven't updated the table yet), we'll show fallback values.
      //
      setEmployeeName(profile.full_name || profile.employee_id || 'Employee');
      setDepartment(profile.department || 'Not set');
      setDesignation(profile.designation || 'Not set');
    }
  }, [profile]);

  // If we don't have a profile yet, show loading state or fallback
  if (!profile) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  return (
    <div className="p-6">
      {/* Welcome/Hero Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          Good morning, {employeeName} 👋
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 mb-6">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Attendance Rate */}
          <div className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-lg font-medium text-gray-600">Attendance Rate</h2>
                <p className="text-2xl font-bold text-gray-800 mt-2">—</p>
              </div>
            </div>
          </div>
          {/* Leave Balance */}
          <div className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-lg font-medium text-gray-600">Leave Balance</h2>
                <p className="text-2xl font-bold text-gray-800 mt-2">—</p>
              </div>
            </div>
          </div>
          {/* Working Hours */}
          <div className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-lg font-medium text-gray-600">Working Hours</h2>
                <p className="text-2xl font-bold text-gray-800 mt-2">—</p>
              </div>
            </div>
          </div>
          {/* Pending Requests */}
          <div className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-lg font-medium text-gray-600">Pending Requests</h2>
                <p className="text-2xl font-bold text-gray-800 mt-2">—</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid gap-4">
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => navigate('/employee/attendance')}
              className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <CheckCheck className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Check In</h3>
                  <p className="text-sm text-gray-500">Mark your attendance</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => navigate('/employee/leave')}
              className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">Apply Leave</h3>
                  <p className="text-sm text-gray-500">Request time off</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => navigate('/employee/profile')}
              className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">View Profile</h3>
                  <p className="text-sm text-gray-500">See your details</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => navigate('/employee/payroll')}
              className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <Plus className="h-5 w-5 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800">View Payroll</h3>
                  <p className="text-sm text-gray-500">See your salary details</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <p className="text-center text-gray-500 py-8">
            No recent activity
          </p>
        </div>
      </div>
    </div>
  );
}