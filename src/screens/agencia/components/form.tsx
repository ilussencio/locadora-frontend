import { useState } from 'react';
function Form() {
    const [nome, setNome] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [numero, setNumero] = useState<number>(0);
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    return <>

        <div className="flex justify-end m-5">
            <button onClick={() => handleShowModal()} className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Adicionar</button>
        </div>


        <div id="popup-modal" tabIndex={-1} className={showModal ? "bg-black bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" : "hidden"}>

            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => handleShowModal()}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only" >Fechar modal</span>
                    </button>

                    <div className="p-4 md:p-5 text-center">
                        <p className="text-xl mb-3">Cadastro</p>
                        <form>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="nome" className="mb-1 text-md">Nome:</label>
                                <input type="text" className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" name="nome" onChange={(item) => { setNome(item.target.value) }} />
                            </div>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="rua" className="mb-1 text-md">Rua:</label>
                                <input className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" type="text" name="rua" onChange={(item) => { setRua(item.target.value) }} />
                            </div>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="numero" className="mb-1 text-md">Numero:</label>
                                <input className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" type="number" name="numero" onChange={(item) => { setNumero(item.target.value) }} />
                            </div>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="bairro" className="mb-1 text-md">Bairro:</label>
                                <input className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" type="text" name="bairro" onChange={(item) => { setBairro(item.target.value) }} />
                            </div>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="cidade" className="mb-1 text-md">Cidade:</label>
                                <input className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" type="text" name="cidade" onChange={(item) => { setCidade(item.target.value) }} />
                            </div>
                            <div className="flex flex-col items-start mb-3">
                                <label htmlFor="estado" className="mb-1 text-md">Estado:</label>
                                <input className="border-2 border-gray-500 rounded-md px-3 py-1 text-sm w-full" type="text" name="estado" onChange={(item) => { setEstado(item.target.value) }} />
                            </div>
                        </form>

                        <button data-modal-hide="popup-modal" type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Cadastrar
                        </button>

                        <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleShowModal()}>
                            cancelar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default Form;