import api from "../../api";
interface CarrosDelete {
    id: string;
}
export default async function carrosDelete({id}: CarrosDelete) {

    let res = null;
    try {
        res = await api.delete(`/carros/${id}`);
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao deletar os dados!" };
    }
    
    return res;
}