import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://miranda-v1.firebaseio.com/'
})

export default instance;