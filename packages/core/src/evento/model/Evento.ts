import Convidado from './Convidado';

export default interface Evento {
  id: string; // uuid
  alias: string; //aniversario-rebeca-2025 (nome único)
  senha: string;
  nome: string;
  data: Date;
  local: string;
  descricao: string;
  imagem: string;
  imagemBackground: string;
  publicoEsperado: number;
  convidados: Convidado[];
}
