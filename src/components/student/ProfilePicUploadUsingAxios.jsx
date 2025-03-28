import React, { useState } from 'react'
import axiosInstance from '../../config/axios_config'

export default function ProfilePicUploadUsingAxios({ id, updatePage }) {
    const [file, setFile] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profile-photo', file)
        formData.append('id', id)
        axiosInstance.post('/students/upload', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(res => {
            console.log(res.data)
            localStorage.setItem('student', JSON.stringify(res.data))
            updatePage(res.data)
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-4xl'>Upload Using html axios</h1>
            <input
                className="mt-4 p-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                name="profile-photo"
            />

            <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded">Upload</button>
        </form>
    )
}
