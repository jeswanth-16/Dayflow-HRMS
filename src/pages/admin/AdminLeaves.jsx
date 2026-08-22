export default function AdminLeaves() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Leave Management</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-600">Leave Requests</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Approve Selected
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">John Doe (EMP001)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Vacation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug 25, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug 27, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-500 mr-2">Approve</button>
                  <button className="text-red-600 hover:text-red-500">Reject</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Jane Smith (EMP002)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Sick Leave</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug 24, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug 24, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-500 mr-2">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}