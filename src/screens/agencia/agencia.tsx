
import { useEffect, useState } from 'react';

import Header from './components/header';
import Table from './components/table';
import Form from './components/form';
import { toast } from 'react-toastify';

import agenciaFindAll from '../../services/agencia/agenciaFindAll';


function Agencia() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    await agenciaFindAll({ page: page }).then((res) => {
      if ("error" in res && res.error) {
        toast.error(res.message);
      }
      if ("content" in res) {
        setData(res.content);
        setPageSize(res.totalPages);
        console.log(res)
      }
    }).catch(() => {
      toast.error("Erro ao buscar dados das agências. Tente novamente mais tarde.");
    })
  }
  const nextPage = () => {
    if (page === pageSize - 1) return;
    setPage(page + 1);
  }
  const previousPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  }

  return <>

    <Header />
    <Form />



    {data.length > 0 ? <Table data={data} /> :
      <center>
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin w-10 h-10" fill="#000000" version="1.1" viewBox="144 144 512 512">
          <path d="m431.49 604.67v-62.977c0-17.383-14.109-31.488-31.488-31.488-17.383 0-31.488 14.105-31.488 31.488v62.977c0 17.379 14.105 31.488 31.488 31.488 17.379 0 31.488-14.109 31.488-31.488zm118.57-71.809-40.477-48.242c-11.18-13.316-31.047-15.051-44.367-3.8867-13.305 11.18-15.051 31.047-3.875 44.367l40.48 48.238c11.16 13.32 31.047 15.051 44.367 3.8906 13.301-11.18 15.051-31.047 3.8711-44.367zm-260.89 40.477 40.477-48.238c11.18-13.32 9.4336-33.188-3.8711-44.367-13.32-11.164-33.203-9.4297-44.367 3.8867l-40.477 48.242c-11.18 13.32-9.4336 33.188 3.8711 44.367 13.32 11.16 33.188 9.4297 44.367-3.8906zm-93.836-141.85h62.977c17.383 0 31.488-14.109 31.488-31.488 0-17.383-14.105-31.488-31.488-31.488h-62.977c-17.379 0-31.488 14.105-31.488 31.488 0 17.379 14.109 31.488 31.488 31.488zm409.35-62.977h-62.977c-17.383 0-31.488 14.105-31.488 31.488 0 17.379 14.105 31.488 31.488 31.488h62.977c17.379 0 31.488-14.109 31.488-31.488 0-17.383-14.109-31.488-31.488-31.488zm-102.86-141.86-40.48 48.238c-11.176 13.32-9.4297 33.191 3.875 44.367 13.32 11.164 33.188 9.4336 44.367-3.8867l40.477-48.242c11.18-13.316 9.4297-33.188-3.8711-44.363-13.32-11.164-33.207-9.4336-44.367 3.8867zm-260.89 40.477 40.477 48.242c11.164 13.32 31.047 15.051 44.367 3.8867 13.305-11.176 15.051-31.047 3.8711-44.367l-40.477-48.238c-11.18-13.32-31.047-15.051-44.367-3.8867-13.305 11.176-15.051 31.047-3.8711 44.363zm127.59-71.809v62.977c0 17.383 14.105 31.488 31.488 31.488 17.379 0 31.488-14.105 31.488-31.488v-62.977c0-17.379-14.109-31.488-31.488-31.488-17.383 0-31.488 14.109-31.488 31.488z" fill-rule="evenodd" />
        </svg>
      </center>
    }

    <div className="flex justify-center">  
      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <button className={(page === pageSize?"bg-gray-800":"") +"bg-gray-800 block text-white  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-xs rounded-md text-sm px-3 py-1 text-center"} type="button" onClick={previousPage}>Anterior</button>
        </div>
        <div className="">
          <span>{page + 1} de {pageSize}</span>
        </div>
        <div className="">
          <button className="block text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-xs rounded-md text-sm px-3 py-1 text-center" type="button" onClick={nextPage}>Proximo</button>
        </div>
      </div>

    </div>

      
  </>
}

export default Agencia;