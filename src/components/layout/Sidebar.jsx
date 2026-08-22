import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Clock, FileText, BarChart2, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex items-center space-x-3">
          {/* We'll use a placeholder for the logo, but we can use the LayoutDashboard as a placeholder */}
          <LayoutDashboard className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">DAYFLOW</span>
        </div>
      </div>
      <nav className="mt-6 space-y-1">
        <NavLink
          to="/employee"
          end
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <Users className="h-5 w-5 mr-3" />
          <span>Employees</span>
        </NavLink>
        <NavLink
          to="/employee/profile"
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <Users className="h-5 w-5 mr-3" />
          <span>Profile</span>
        </NavLink>
        <NavLink
          to="/employee/attendance"
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <Clock className="h-5 w-5 mr-3" />
          <span>Attendance</span>
        </NavLink>
        <NavLink
          to="/employee/leave"
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <FileText className="h-5 w-5 mr-3" />
          <span>Leave</span>
        </NavLink>
        <NavLink
          to="/employee/payroll"
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <BarChart2 className="h-5 w-5 mr-3" />
          <span>Payroll</span>
        </NavLink>
      </nav>
      <div className="mt-auto p-4 border-t border-gray-200">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) => `
            flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md
            ${isActive ? 'bg-indigo-50 text-indigo-600' : ''}
          `}
        >
          <Settings className="h-5 w-5 mr-3" />
          <span>Admin</span>
        </NavLink>
      </div>
    </aside>
  );
}