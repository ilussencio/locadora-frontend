import api from "../../api";

export default async function agenciaFindAll({page = 0}) {
   
    let res = null;
    try {
        res = await api.get(`/agencia?size=5&page=${page}`);
    } catch (error) {
        res = { error: true, message: "Error ao carregar os dados!" };
    }

    return res.data;
}