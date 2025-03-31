import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveStudent } from '../../slices/studentSlice';
import Loading from '../common/Loading';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        dob: '',
    });
    const dispatch = useDispatch()
    const studentState = useSelector(state => state.student)

    const handleChange = (e) => {
        const { name, value } = e.target; // de-structure target object
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveStudent(formData))
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/2 bg-blue-500 p-8 flex flex-col justify-center items-center relative">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/ZdIwOExDGuJVwVXg2dIBSf18YvRNRV5_yBZtgxpIz1g.jpg"
                        alt="Background image of children studying"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="relative z-10 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">What's New on PreSkool !!!</h2>
                        <div className="bg-white bg-opacity-20 p-4 rounded-lg space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-bold">Summer Vacation Holiday Homework</h3>
                                <p className="text-sm">The school will remain closed from April 20th to June...</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-bold">New Academic Session Admission Start(2024-25)</h3>
                                <p className="text-sm">An academic term is a portion of an academic year, the time ...</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-bold">Date sheet Final Exam Nursery to Sr.Kg</h3>
                                <p className="text-sm">Dear Parents, As the final examination for the session 2024-25 is ...</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-bold">Annual Day Function</h3>
                                <p className="text-sm">Annual functions provide a platform for students to showcase their...</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-bold">Summer Vacation Holiday Homework</h3>
                                <p className="text-sm">The school will remain closed from April 20th to June 15th for summer...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 p-8">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://storage.googleapis.com/a1aa/image/EEyU3ihwiGXq5JgJElXouii2d6g_w3CpsmvG1zhSHw0.jpg"
                            alt="PreSkool logo"
                            className="h-12"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                    <p className="text-center mb-6">Please enter your details to sign up</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-facebook-f mr-2"></i> Facebook
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-google mr-2"></i> Google
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                            <i className="fab fa-apple mr-2"></i> Apple
                        </button>
                    </div>
                    <div className="text-center mb-6">Or</div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-lock absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">First Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Last Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Date of Birth</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" required />
                                <span className="ml-2">
                                    I Agree to <a href="#" className="text-blue-500">Terms & Privacy</a>
                                </span>
                            </label>
                        </div>
                        {
                            studentState.status === "pending" ? (
                                <Loading />
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Register
                                </button>
                            )
                        }
                        {
                            studentState.status === "failed" && <p className="text-red-500 mt-2">Error: {studentState.message}</p>
                        }
                        {
                            studentState.status === "success" && <p className="text-green-500 mt-2">{studentState.message}</p>
                        }
                    </form>
                    <div className="text-center mt-4">
                        Already have an account? <a href="#" className="text-blue-500">Sign In</a>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        Copyright © 2024 - PreSkool
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
