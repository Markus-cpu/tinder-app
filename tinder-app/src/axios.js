import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backend-tinder-app.herokuapp.com'
})

export default instance