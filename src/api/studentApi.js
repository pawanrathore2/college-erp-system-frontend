import axiosConfig from '../config/axios_config'


const login = async ({ username, password }) => {
    const response = await axiosConfig.post('/students/login',
        { username, password })
    if (response.status == 200) return true
    else return false
}

export default { login }