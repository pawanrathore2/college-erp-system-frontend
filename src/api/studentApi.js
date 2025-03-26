import { toast } from 'react-toastify'
import axiosConfig from '../config/axios_config'

const getAllStudents = async () => {
    try {
        const response = await axiosConfig.get("/students")
        if (response.status == 200) {
            return response.data
        }
    } catch (error) {
        console.error(error)
        throw new Error("Failed To load Students")
    }
}
const createStudent = async (student, { rejectWithValue}) => {
    let response
    try {
        response = await axiosConfig.post("/students", student)
        if (response.status == 201) {
            toast.success("Student Created Successfully")
            return response.data
        }
    } catch (error) {
        toast.error(error.response.data.message)
       return rejectWithValue(error.response.data)

    }
}
const login = async ({ username, password }) => {
    try {
        const response = await axiosConfig.post('/students/login',
            { username, password })
        if (response.status == 200) return true
        else return false
    } catch (error) {
        console.error(error)
        return false
    }
}

export default { login, getAllStudents, createStudent }