import api from "../../api";

interface agenciaUpdate {
    id: string;
    nome: string;
    cidade: string;
    bairro: string;
    numero: number;
    rua: string;
    estado: string;
}

export default async function agenciaUpdate({id, nome, cidade, bairro, numero, rua, estado}: agenciaUpdate) {
    let res = null;
    try {
        res = await api.put(`/agencia/${id}`, {
            nome,
            cidade,
            bairro,
            numero,
            rua,
            estado
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao atualizar os dados!" };
    }
    return res;
}