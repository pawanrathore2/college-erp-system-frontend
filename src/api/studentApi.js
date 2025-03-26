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
const createStudent = async (student) => {
    let response
    try {
        response = await axiosConfig.post("/students", student)
        if (response.status == 201) {
            return response.data
        }
    } catch (error) {
        if(!error.response) throw new Error("Failed to create student")
            
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