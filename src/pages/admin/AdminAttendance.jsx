export default function AdminAttendance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Attendance Overview</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="mb-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Export Attendance Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Late</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((day) => (
                <tr key={day} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug {20 + day}, 2026</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{100 - day * 2}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{day * 2}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{day}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{(100 - day * 2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}