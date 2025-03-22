import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to Student Fee Management
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Simplify and streamline the management of student fees with our modern and user-friendly platform.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
                        Get Started
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;