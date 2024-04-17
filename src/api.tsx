import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:53647/api/v1',
    headers: {
        'Content-Type': 'application/json',
        //cors
        'Access-Control-Allow-Origin': '*',
    }
});

export default api;