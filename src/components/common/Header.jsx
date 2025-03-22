import React from 'react'

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">Student Fees Management</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/login" className="hover:underline">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/register" className="hover:underline">
                            Register
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
