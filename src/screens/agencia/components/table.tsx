import { useEffect, useState } from "react"
import api from "../../../api";

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
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereco</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return <tr key={index}>
                            <td className="border border-green-60">{item.nome}</td>
                            <td className="border border-green-60">{item.localizacao.rua}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}