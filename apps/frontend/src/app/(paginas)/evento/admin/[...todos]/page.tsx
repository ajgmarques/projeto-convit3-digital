'use client';
import DashboardEvento from '@/components/evento/DashboardEvento';
import FormSenhaEvento from '@/components/evento/FormSenhaEvento';
import { Convidado, Evento, eventos } from 'core';
import { use, useEffect, useState } from 'react';

export default function PaginaAdminEvento(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = use(props.params);
  const id = params.todos[0];

  const [evento, setEvento] = useState<Evento | null>(null);
  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

  const presentes =
    evento?.convidados.filter((confirmado) => confirmado.confirmado) ?? [];

  const ausentes =
    evento?.convidados.filter((confirmado) => !confirmado.confirmado) ?? [];

  const totalGeral =
    presentes?.reduce((total: number, convidado: Convidado) => {
      return total + convidado.quantidadeDeAcompanhantes + 1;
    }, 0) ?? 0;

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(evento ?? null);
  }

  useEffect(() => {
    carregarEvento();
  }, [id, senha]);

  return (
    <div className='flex flex-col items-center'>
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral}
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );
  //TODO - Apagar
  // return evento ? (
  //   <div className='flex flex-col'>
  //     <span>{evento.nome}</span>
  //     <span>{totalGeral}</span>
  //   </div>
  // ) : null;
}
