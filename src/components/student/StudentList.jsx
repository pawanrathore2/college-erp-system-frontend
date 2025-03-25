import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../slices/studentSlice';
import Loading from '../common/Loading';

export default function StudentList() {
    const studentState = useSelector(state => state.student)
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(fetchStudents())
},[])
    if (studentState.status == "idle") return
    if (studentState.status == "pending")
        return <Loading />
    if (studentState.status == "failed") return <h1>Error : Fetching students</h1>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Age</th>
                            <th className="py-2 px-4 border-b">Class</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentState?.students.map((student) => (
                            <tr key={student._id}>
                                <td className="py-2 px-4 border-b">{student._id}</td>
                                <td className="py-2 px-4 border-b">{student.firstName} {student.lastName}</td>
                                <td className="py-2 px-4 border-b">{student.email}</td>
                                <td className="py-2 px-4 border-b">{student.username}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="text-blue-500 hover:underline">Edit</button>
                                    <button className="text-red-500 hover:underline ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
