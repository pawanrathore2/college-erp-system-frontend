import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import studentApi from '../../api/studentApi'
const Login = () => {
    // to navigate to another page programmatically
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const goToDashboard = () => {
        studentApi.login({ username, password })
            .then((isLoggedIn) => {
                if (isLoggedIn) {
                    navigate("/dashboard")
                } else {
                    console.log("Invalid credentials")
                    alert("Login failed")
                }
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                {/* <form className="space-y-4"> */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-600"
                        >
                            Remember me
                        </label>
                    </div>
                    <a
                        href="#"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot password?
                    </a>
                </div>
                <button
                    onClick={goToDashboard}
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
                {/* </form> */}
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;