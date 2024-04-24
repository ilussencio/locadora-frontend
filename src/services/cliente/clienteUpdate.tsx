import api from "../../api";

interface Cliente {
    id: string,
    nome: string,
    telefone: string,
    cpf: string,
    email: string
}
export default async function clienteUpdate({id, nome, telefone, cpf, email}: Cliente) {
    let res = null;
    try {
        res = await api.put(`/cliente/${id}`, {
            nome,
            telefone,
            cpf,
            email
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao atualizar os dados!" };
    }
    return res;
}