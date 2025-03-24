import React from "react";
import StudentList from "../components/student/StudentList";

const DashboardPage = () => {

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                <p className="text-gray-600">Manage student information and fees</p>
            </header>

            <StudentList />
        </div>
    );
};

export default DashboardPage;