export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium text-gray-600">Total Employees</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium text-gray-600">Active Today</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">110</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium text-gray-600">On Leave</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <h2 className="text-lg font-medium text-gray-600">Pending Approvals</h2>
          <p className="text-2xl font-bold text-gray-800 mt-2">12</p>
        </div>
      </div>
    </div>
  );
}