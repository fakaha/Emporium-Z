import axios from "axios"

export const FetchProduct = (callback) => {
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((response) => {
        callback(response.data)
        console.log('ini response : ', response.data);
    })
    .catch((err) => {
        console.log('error bro : ',err);
    })
}