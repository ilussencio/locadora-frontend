import api from "../../api";

interface cliente{
    id: string;
}

export default async function clienteDelete({id}: cliente) {
    let res = null;
    try {
        res = await api.delete(`/cliente/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao deletar os dados!" };
    }
    
    return res;
}