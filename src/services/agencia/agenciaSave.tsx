import api from "../../api";

interface AgenciaSave {
    nome: string;
    cidade: string;
    bairro: string;
    numero: number;
    rua: string;
    estado: string;
}

export default async function agenciaSave({nome, cidade, bairro, numero, rua, estado}: AgenciaSave) {
    let res = null;
    try {
        res = await api.post('/agencia', {
            nome,
            cidade,
            bairro,
            numero,
            rua,
            estado
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao salvar os dados!" };
    }

    return res;
}