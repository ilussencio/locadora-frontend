import api from "../../api";
interface AgenciaDelete {
    id: string;
}
export default async function agenciaDelete({id}: AgenciaDelete) {
    
    let res = null;
    try {
        res = await api.delete(`/agencia/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao deletar os dados!" };
    }
    
    return res;
}