import React from 'react'

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            <span className="ml-4 text-gray-500">Loading...</span>
        </div>
    )
}
