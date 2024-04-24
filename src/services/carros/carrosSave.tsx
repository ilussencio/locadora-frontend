import api from "../../api";

interface CarrosSave {
    marca: string;
    modelo: string;
    placa: string;
    agencia: string;
    preco: number;
    fotoPrincipal: string;
    fotoSecundaria: string;
}

export default async function carrosSave({marca, modelo, placa, agencia, preco, fotoPrincipal, fotoSecundaria}: CarrosSave) {
    let res = null;
    try {
        res = await api.post('/carros', {
            marca,
            modelo,
            placa,
            agencia,
            preco,
            fotoPrincipal,
            fotoSecundaria
        });
    } catch (error) {
        console.log(error);
        res = { error: true, message: "Error ao salvar os dados!" };
    }
    return res;    
}