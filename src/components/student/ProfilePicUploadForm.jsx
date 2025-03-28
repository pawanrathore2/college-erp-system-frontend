import React from 'react'

export default function ProfilePicUploadForm({id}) {
    return (
        <form action="http://localhost:5001/students/upload"
            method="post"
            encType="multipart/form-data">
                <h1 className='text-4xl'>Upload Using html form</h1>
            <input
                className="mt-4 p-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file" name="profile-photo" />
            <input type="hidden"
                name="id"
                value={id} />
            <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded">Upload</button>
        </form>
    )
}
