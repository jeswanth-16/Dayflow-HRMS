import { Bell, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
      <div className="flex-1">
        <span className="text-lg font-semibold text-gray-800">Dashboard</span>
      </div>
      <div className="flex items-center space-x-4">
        <NavLink to="/employee/profile" className="p-1 rounded hover:bg-gray-100">
          <User className="h-5 w-5" />
        </NavLink>
        <NavLink to="#" className="p-1 rounded hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </NavLink>
      </div>
    </header>
  );
}