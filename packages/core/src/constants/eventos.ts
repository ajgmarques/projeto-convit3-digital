import { Evento } from '../evento';

const eventos: Evento[] = [
  {
    id: '46c87b3b-b077-4a5b-b831-9da895f21cce',
    alias: 'evento-fullstack',
    senha: 'senha122223',
    nome: 'Evento de Desenvolvimento Fullstack',
    data: new Date('2024-12-01T10:00:00Z'),
    local: 'São Paulo, SP',
    descricao:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    imagem: 'https://www.computerhope.com/jargon/p/program.png',
    imagemBackground:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    publicoEsperado: 200,
    convidados: [
      {
        id: '361e8fc9-dea0-4275-b9ec-1cb788a28854',
        nome: 'Alice Silva',
        email: 'alice@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 1,
      },
      {
        id: '2b4b15a7-d54a-442f-9045-4b249b1c8470',
        nome: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
      {
        id: '69219267-2908-4a80-b7f0-05e5a80582c0',
        nome: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 2,
      },
    ],
  },
  {
    id: '3749adb8-e4f1-44fe-bc61-00405d4be02e',
    alias: 'evento-js-avancado',
    senha: 'js2024',
    nome: 'Workshop Avançado de JavaScript',
    data: new Date('2024-11-20T15:00:00Z'),
    local: 'Rio de Janeiro, RJ',
    descricao: 'Um workshop avançado para programadores JavaScript.',
    imagem:
      'https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg',
    imagemBackground:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    publicoEsperado: 100,
    convidados: [
      {
        id: '5f794d08-b258-4760-ac78-b632100c0799',
        nome: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
      {
        id: 'e1a509e6-0f44-4cdd-b796-be29c94b2e52',
        nome: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 1,
      },
    ],
  },
  {
    id: '6bb39ad0-9cb6-4e9c-93bc-22476966f890',
    alias: 'evento-dev-frontend',
    senha: 'front123',
    nome: 'Bootcamp de Desenvolvimento Frontend',
    data: new Date('2024-11-15T09:00:00Z'),
    local: 'Belo Horizonte, MG',
    descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
    imagem:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    imagemBackground:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'f75dd514-2ebb-4c9b-860b-968e57e8c326',
        nome: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 1,
      },
      {
        id: '49d93789-3dd5-4009-844e-4ea98438e05b',
        nome: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
      {
        id: '7c576592-1645-4c56-a6ef-b3287b39aeca',
        nome: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '051f3bf6-4292-4dd8-a76a-006b798a49c9',
    alias: 'casamento-alberto-marina',
    senha: 'casamento2024',
    nome: 'Casamento do Alberto e Marina',
    data: new Date('2024-11-25T16:00:00Z'),
    local: 'Florianópolis, SC',
    descricao:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    imagem:
      'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    imagemBackground:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    publicoEsperado: 150,
    convidados: [
      {
        id: 'd32270b7-5159-4569-a554-c3e73c99d9cc',
        nome: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 1,
      },
      {
        id: '4de338e7-db4b-4bfa-9612-adb9b6d52199',
        nome: 'Carla Mendes',
        email: 'carla@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '5a8efe3d-5748-4823-8ee0-f4ce6f1b1e1c',
    alias: 'aniversario-joao',
    senha: 'joao2024',
    nome: 'Aniversário do João - 30 Anos',
    data: new Date('2024-12-05T18:00:00Z'),
    local: 'Curitiba, PR',
    descricao:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    imagem:
      'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
    imagemBackground:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    publicoEsperado: 80,
    convidados: [
      {
        id: 'bf11aee5-062a-420e-9cfe-d2f25d01f15a',
        nome: 'Maria Souza',
        email: 'maria@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 2,
      },
      {
        id: 'ea550ff7-5c6f-4fe1-8166-9656d1453c2e',
        nome: 'José Almeida',
        email: 'jose@example.com',
        confirmado: false,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
    ],
  },
  {
    id: '6551320f-4de5-4f4b-8d7e-99a95bbc5904',
    alias: 'inauguracao-loja-estrela',
    senha: 'estrela2024',
    nome: 'Inauguração da Loja Estrela',
    data: new Date('2024-12-10T09:00:00Z'),
    local: 'Porto Alegre, RS',
    descricao:
      'Evento de inauguração da nova loja Estrela com brindes e promoções.',
    imagem:
      'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
    imagemBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    publicoEsperado: 300,
    convidados: [
      {
        id: 'b7dddbaf-2eee-4ef0-8201-cf6ebb4fc1da',
        nome: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 3,
      },
      {
        id: '95302201-3112-41d4-92bd-13370d1b4d04',
        nome: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
    ],
  },
  {
    id: 'ce0aaaea-2d76-4daa-aec3-c2d430af90f7',
    alias: 'reuniao-familia-oliveira',
    senha: 'familia2024',
    nome: 'Reunião da Família Oliveira',
    data: new Date('2024-12-15T12:00:00Z'),
    local: 'Salvador, BA',
    descricao: 'Reunião de fim de ano da família Oliveira.',
    imagem:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    imagemBackground:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    publicoEsperado: 50,
    convidados: [
      {
        id: 'ec01272c-949d-4efc-a5ae-f5578b13ae8b',
        nome: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmado: true,
        possuiAcompanhantes: true,
        quantidadeDeAcompanhantes: 4,
      },
      {
        id: '28140b3f-c5f2-4ca6-a3af-2a439fef67fa',
        nome: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmado: true,
        possuiAcompanhantes: false,
        quantidadeDeAcompanhantes: 0,
      },
    ],
  },
];

export default eventos;
