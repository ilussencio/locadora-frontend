import api from "../../api";

export default async function agenciaFindAll() {
    let res = null;
    try {
        res = await api.get('/agencia');
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }

    return res;
}