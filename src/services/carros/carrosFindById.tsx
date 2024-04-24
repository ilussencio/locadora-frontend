import api from "../../api";

interface CarrosFind {
    id: string;
}
export default async function carrosFindById( {id}: CarrosFind) {

    let res = null;
    try {
        res = await api.get(`/carros/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }

    return res;
}