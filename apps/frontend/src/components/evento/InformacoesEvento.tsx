import { Evento } from 'core';
import Informacao from '../shared/Informacao';

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}
export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;

  const dataEventoEmMilisegundos = new Date(evento.data).getTime();
  const dataAtualEmMilisegundos = new Date().getTime();
  const umDiaEmMilisegundos = 24 * 60 * 60 * 1000;
  const diasQueFaltamAteAoEvento =
    ((dataEventoEmMilisegundos - dataAtualEmMilisegundos) / umDiaEmMilisegundos) + 1;

  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
      <div
        className='flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3
        rounded-lg
      '
      >
        <span className='text-2xl font-black'>{evento.alias}:</span>
        <span className='text-xl text-zinc-300'>{evento.nome}</span>
      </div>
      <div className='flex gap-2'>
        <Informacao label='Data:'>
          <span>
            {new Date(evento.data).toLocaleDateString()}
            {' às '}
            {new Date(evento.data).toLocaleTimeString()}
            {(diasQueFaltamAteAoEvento < 0) ? ' foi há: ' : ' faltam: '}
            {Math.abs(Math.round(diasQueFaltamAteAoEvento))} dias
          </span>
        </Informacao>
        <Informacao label='Local:'>{evento.local}</Informacao>
      </div>
      <div>
        <Informacao label='Descrição:'>{evento.descricao}</Informacao>
      </div>
    </div>
  );
}
