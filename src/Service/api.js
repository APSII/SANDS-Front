import axios from 'axios';

const api = axios.create({
    /* baseURL: 'https://app-sands-aps.herokuapp.com/' */
    baseURL:'https://jsonplaceholder.typicode.com'
});

export default api;