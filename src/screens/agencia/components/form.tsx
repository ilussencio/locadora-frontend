import { useState } from 'react';
function Form(){
    const [nome, setNome] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [numero, setNumero] = useState<number>(0);
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');

    return <>
        <h2>Formulario</h2>
        {nome}
        <form>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome"  onChange={(item) => {setNome(item.target.value)}}/>
            </div>
            <div>
                <label htmlFor="rua">Rua:</label>
                <input type="text" name="rua" onChange={(item) => {setRua(item.target.value)}}/>
            </div>
            <div>
                <label htmlFor="numero">Numero:</label>
                <input type="number" name="numero" onChange={(item) => {setNumero(item.target.value)}}/>
            </div>
            <div>
                <label htmlFor="bairro">Bairro:</label>
                <input type="text" name="bairro" onChange={(item) => {setBairro(item.target.value)}}/>
            </div>
            <div>
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" name="cidade" onChange={(item) => {setCidade(item.target.value)}}/>
            </div>
            <div>
                <label htmlFor="estado">Estado:</label>
                <input type="text" name="estado" onChange={(item) => {setEstado(item.target.value)}}/>
            </div>
        </form>
    </>
}
export default Form;