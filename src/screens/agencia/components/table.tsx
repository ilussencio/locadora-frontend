import IAgencia from "../../../services/interface/IAgencia"
import Excluir from "./excluir"
export default function Table({ data }: { data: IAgencia[] }) {

    return <div className="flex justify-center">        
        <table className="m-5">
            <thead>
                <tr>
                    <th className="border p-3 text-bold bg-gray-900 text-white">Nome</th>
                    <th className="border p-3 text-bold bg-gray-900 text-white">Endereco</th>
                    <th className="border p-3 text-bold bg-gray-900 text-white">Ação</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ?
                    data.map((item: IAgencia, index: number) => {
                        console.log(item)
                        return <tr key={index}>
                            <td className="border border-green-60 p-3">{item.nome}</td>
                            <td className="border border-green-60 p-3">{item.localizacao.rua}, {item.localizacao.numero}, {item.localizacao.cidade} - {item.localizacao.estado}</td>
                            <td className="border border-green-60 p-3"><Excluir idAgencia={item.idAgencia} nome={item.nome}/></td>
                        </tr>
                    }):<tr><td className="border border-green-60 p-3 text-center" colSpan={3}>Não possui registros</td></tr>
                }
            </tbody>
        </table>
    </div>
}