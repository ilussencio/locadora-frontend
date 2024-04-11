import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:9080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;