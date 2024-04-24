import api from "../../api";

export default async function carrosFindAll() {
    let res = null;
    try {
        res = await api.get('/carros');
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }

    return res;
}