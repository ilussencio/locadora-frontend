import { useEffect, useState } from "react"
import api from "../../../api";
import Excluir from "./excluir";

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
        console.log('fetching data');
        console.log(data);
    }, []);

    const fetchData = async () => {
        api.get('/agencia').then((response) => {
            setData(response.data);
            //console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }
    return <>
        <table className="m-5">
            <thead>
                <tr>
                    <th className="border  p-3 text-bold" >Nome</th>
                    <th className="border p-3 text-bold">Endereco</th>
                    <th className="border p-3 text-bold">Ação</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return <tr key={index}>
                            <td className="border border-green-60 p-3">{item.nome}</td>
                            <td className="border border-green-60 p-3">{item.localizacao.rua}</td>
                            <td className="border border-green-60 p-3"><Excluir idAgencia={item.idAgencia} nome={item.nome} /></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}