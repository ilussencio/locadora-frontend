import api from "../../api";

interface ClienteId{
    id: string;
}
export default async function clienteFindById({id}: ClienteId) {
    let res = null;
    try {
        res = await api.get(`/cliente/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }
    return res;    
}