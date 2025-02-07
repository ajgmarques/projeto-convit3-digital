import { eventos } from 'core';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';

export default function PaginaEventos() {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className='flex flex-col w-full
                bg-zinc-800 rounded-lg overflow-hidden
            '
        >
          <div className='relative w-full h-52'>
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className='object-cover'
            ></Image>
          </div>

          <div className='flex flex-1 flex-col items-center p-7 gap-5'>
            <span className='text-lg font-black text-center'>{evento.nome}</span>
            <p className='flex-1 text-sm text-zinc-400 text-center'>
              {evento.descricao}
            </p>

            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className='w-40 h-40'
            />

            <div className='flex gap-5'>
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className='flex-1 botao vermelho'
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className='flex-1 botao verde'
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
