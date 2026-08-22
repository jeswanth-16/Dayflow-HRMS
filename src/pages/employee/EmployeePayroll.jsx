export default function EmployeePayroll() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Payroll</h1>
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="mb-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Download Latest Payslip
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allowances</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deductions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Pay</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">July 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Aug 1, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$3,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$300</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$3,200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">June 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">July 1, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$3,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$300</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">$3,200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}