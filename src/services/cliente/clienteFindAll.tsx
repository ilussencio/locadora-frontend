import api from "../../api";

export default async function clienteFindAll() {
    let res = null;
    try {
        res = await api.get('/cliente');
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao carregar os dados!" };
    }

    return res;
}