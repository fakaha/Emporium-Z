import axios from "axios"

export const login = (data, callback) => {
    axios.post('https://api.escuelajs.co/api/v1/auth/login', data)
    .then((res) => {
        callback(true, res.data.access_token)
    })
    .catch((err) => {
        callback(false, err.response.data.message);
    })
}

export const register = (data, callback) => {
    axios.post('https://api.escuelajs.co/api/v1/users/', data)
    .then((res) => {
        callback(true, res.data.access_token)
    })
    .catch((err) => {
        callback(false, err.response.data.message);
    })
}

export const getMe = (callback) => {
    axios.get('https://api.escuelajs.co/api/v1/auth/profile',
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then((res) => {
        callback(res.data)
    })
    .catch((err) => {
        console.log('error get user : ',err);
    })
}