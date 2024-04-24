import api from "../../api";
interface Cliente {
    nome: string,
    telefone: string,
    cpf: string,
    email: string
}
export default async function clienteSave({nome, telefone, cpf, email}: Cliente) {
    let res = null;
    try {
        res = await api.post('/cliente', {
            nome,
            telefone,
            cpf,
            email
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao salvar os dados!" };
    }
    return res;
}