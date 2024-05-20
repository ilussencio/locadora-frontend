import axios from "axios";

const api = axios.create({
    //baseURL: 'https://api.srbit.com.br/locadora-api/api/v1',
    //baseURL:'http://192.168.100.27:46353/api/v1',
    baseURL: 'http://localhost:9080/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;