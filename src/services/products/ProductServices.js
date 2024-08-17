import axios from "axios"

export const getProduct = (callback) => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
        callback(response.data)
    })
    .catch((err) => {
        console.log('error bro : ',err);
    })
}

export const getDetailProduct = (id, callback) => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((response) => {
        callback(response.data)
    })
    .catch((err) => {
        console.log(err);
    })
}