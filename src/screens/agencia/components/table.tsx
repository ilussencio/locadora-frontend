import { useEffect, useState } from "react"
import api from "../../../api";
import Excluir from "./excluir";
import Alert from "../../../common/alerts/alert";

export default function Table() {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [typeAlert, setTypeAlert] = useState<string>("");
    const [messageAlert, setMessageAlert] = useState<string>("");

    useEffect(() => {
        fetchData();
        setReload(false);
    }, [reload]);

    const fetchData = async () => {
        setData([]);
        api.get('/agencia').then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            setShowAlert(true);
            setMessageAlert("Error ao carregar os dados!");
            setTypeAlert("error");
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        });
    }

    const deleteAgencia = async (idAgencia: string) => {
        console.log("ID", idAgencia)
        await api.delete(`/agencia/${idAgencia}`).then((response) => {
            console.log("Response", response);

            setShowAlert(true);
            setMessageAlert("Agência deletada com sucesso");
            setTypeAlert("success");
            setReload(true);
        }
        ).catch((error) => {
            console.log("Error table", error);

            setShowAlert(true);
            setMessageAlert("Tente novamente mais tarde!");
            setTypeAlert("error");
        }).finally(() => {
            setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        });
    }

    return <div className="flex justify-center">
        {showAlert ? <Alert severity={typeAlert}>{messageAlert}</Alert> : ""}
        
        <table className="m-5">
            <thead>
                <tr>
                    <th className="border p-3 text-bold">Nome</th>
                    <th className="border p-3 text-bold">Endereco</th>
                    <th className="border p-3 text-bold">Ação</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ?
                    data.map((item: any, index: number) => { // Add type 'any' for 'item'
                        console.log(item)
                        return <tr key={index}>
                            <td className="border border-green-60 p-3">{item.nome}</td>
                            <td className="border border-green-60 p-3">{item.localizacao.rua}</td>
                            <td className="border border-green-60 p-3"><Excluir idAgencia={item.idAgencia} nome={item.nome} action={deleteAgencia} /></td>
                        </tr>
                    })
                    :
                    <tr><td className="border border-green-60 p-3 text-center" colSpan={3}>Não possui registros</td></tr>
                }
            </tbody>
        </table>
    </div>
}