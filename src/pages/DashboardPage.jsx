import React from "react";

const DashboardPage = () => {
    const students = [
        { id: 1, name: "John Doe", feesPaid: "$500", status: "Paid" },
        { id: 2, name: "Jane Smith", feesPaid: "$300", status: "Pending" },
        { id: 3, name: "Sam Wilson", feesPaid: "$400", status: "Partial" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                <p className="text-gray-600">Manage student information and fees</p>
            </header>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Fees</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border">ID</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Fees Paid</th>
                            <th className="py-2 px-4 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="text-gray-700">
                                <td className="py-2 px-4 border text-center">{student.id}</td>
                                <td className="py-2 px-4 border">{student.name}</td>
                                <td className="py-2 px-4 border text-center">{student.feesPaid}</td>
                                <td
                                    className={`py-2 px-4 border text-center ${
                                        student.status === "Paid"
                                            ? "text-green-600"
                                            : student.status === "Pending"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                    }`}
                                >
                                    {student.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;