import api from "../../api";

interface carrosUpdate {
    id: string;
    modelo: string;
    marca: string;
    ano: string;
    cor: string;
    preco: string;
    foto: string;
}

export default async function carrosUpdate({id, modelo, marca, ano, cor, preco, foto}:carrosUpdate) {
    let res = null;
    try {
        res = await api.put(`/carros/${id}`, {
            modelo,
            marca,
            ano,
            cor,
            preco,
            foto
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao atualizar os dados!" };
    }
    return res;
}