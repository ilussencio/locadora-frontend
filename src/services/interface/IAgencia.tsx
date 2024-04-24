import ILocalizacao from './ILocalizacao';

interface IAgencia {
    idAgencia: string;
    nome: string;
    localizacao: ILocalizacao;
}

export default IAgencia;