export default function AdminReports() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Reports & Analytics</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-600">Generate Reports</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Generate Report
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Attendance Report</h3>
              <p className="text-sm text-gray-600">Monthly attendance summary for all employees</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Leave Report</h3>
              <p className="text-sm text-gray-600">Leave trends and balances</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Payroll Report</h3>
              <p className="text-sm text-gray-600">Payroll summary and tax reports</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Employee Turnover</h3>
              <p className="text-sm text-gray-600">Hiring and attrition metrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}