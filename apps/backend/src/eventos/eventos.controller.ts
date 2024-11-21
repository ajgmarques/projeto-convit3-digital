import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  complementarConvidado,
  complementarEvento,
  Convidado,
  Data,
  Evento,
  Id,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repositorio: EventoPrisma) {}

  @Post('')
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repositorio.buscarPorAlias(
      evento.alias,
    );
    if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
      throw new HttpException('Já existe um evento com esse alias.', 400);
    }
    const eventoCompleto = complementarEvento(this.deserializar(evento));
    await this.repositorio.salvarEvento(eventoCompleto);
  }

  @Post(':alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.repositorio.buscarPorAlias(alias);
    if (!evento) {
      throw new Error('Evento não encontrado');
    }
    const convidadoCompleto = complementarConvidado(convidado);
    await this.repositorio.salvarConvidado(evento, convidadoCompleto);
  }

  @Post('acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.repositorio.buscarPorId(dados.id);
    if (!evento) {
      throw new HttpException('Evento não encontrado', 400);
    }
    if (evento.senha !== dados.senha) {
      throw new HttpException('A senha não está correta', 400);
    }
    return this.serializar(evento);
  }

  @Get()
  async buscarEventos() {
    const eventos = await this.repositorio.buscarTodos();
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    let evento: Evento;
    if (Id.valido(idOuAlias)) {
      evento = await this.repositorio.buscarPorId(idOuAlias, true);
    } else {
      evento = await this.repositorio.buscarPorAlias(idOuAlias, true);
    }
    return this.serializar(evento);
  }

  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repositorio.buscarPorAlias(alias);
    return { valido: !evento || evento.id === id };
  }

  private serializar(evento: Evento) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }

  private deserializar(evento: any) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
