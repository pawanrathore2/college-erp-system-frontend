import axiosConfig from '../config/axios_config'


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

export default { login }