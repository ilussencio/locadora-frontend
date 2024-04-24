import api from "../../api";

interface agenciaFindById {
    id: string;
}

export default async function agenciaFindById({id}:agenciaFindById) {
    let res = null;
    try {
        res = await api.get(`/agencia/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }
    return res;    
}