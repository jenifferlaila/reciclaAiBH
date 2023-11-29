export type News = {
  url: string;
  img: string;
  title: string;
  description?: string;
};

export const news: News[] = [
  {
    url: 'https://www.itatiaia.com.br/editorias/cidades/2023/06/03/coleta-seletiva-recolhe-menos-de-2-do-lixo-reciclavel-em-belo-horizonte',
    img: 'https://medias.itatiaia.com.br/generic/rfsd-26a9a77e-6cac-4d08-acf1-eb9bd270f0c1.large.webp',
    title: 'Coleta seletiva recolhe menos de 2% do lixo reciclável em Belo Horizonte',
    description:
      'Prefeitura coletou 6,3 mil toneladas de material reciclável em 2022; volume que poderia ter sido reciclado é de 340 mil toneladas',
  },
  {
    url: 'https://www.brasildefatomg.com.br/2023/11/28/em-bh-coletivo-lixo-zero-realiza-evento-para-debater-a-eliminacao-consciente-de-residuos',
    img: 'https://images01.brasildefato.com.br/1596f51b84c4e85f65647b89281db046.jpeg',
    title: 'Em BH, Coletivo Lixo Zero realiza evento para debater a eliminação consciente de resíduos',
    description:
      'Primeiro Fórum Lixo Zero do estado acontece na UFMG e destaca o trabalho dos catadores de materiais recicláveis',
  },
  {
    url: 'https://www.revistaencontro.com.br/canal/cidade/2023/02/dois-dias-de-carnaval-em-bh-renderam-10-toneladas-de-reciclaveis.html',
    img: 'https://www.ecotransambiental.com.br/imagens/informacoes/coleta-seletiva-lixo-reciclavel-sp-01.jpg',
    title: 'Dois dias de Carnaval em BH renderam 10 toneladas de recicláveis',
    description:
      'Os maiores volumes registrados na coleta seletiva são de garrafas PET e latinhas, de acordo com a Superintendência de Limpeza Urbana',
  },
  {
    url: 'https://fundacaoverde.org.br/pages/cidadesustentavel/2019/06/18/se-voce-nao-lavou-o-lixo-reciclavel-voce-so-desperdicou-tempo-explicam-especialistas/',
    img: 'https://fundacaoverde.org.br/pages/cidadesustentavel/wp-content/uploads/sites/2/2019/06/lixo_reciclavel.jpg',
    title: 'Se você não lavou o lixo reciclável, você só desperdiçou tempo, explicam especialistas',
    description:
      'Resíduos recicláveis sujos não são reaproveitados e vão para aterros sanitários; a maior parte das pessoas não sabe jogar fora os recicláveis da forma correta',
  },
  {
    url: 'https://www.brasilcoleta.com.br/lixo-reciclavel-como-trata-lo/',
    img: 'https://www.brasilcoleta.com.br/wp-content/uploads/2019/12/lixo-reciclavel-como-trata-lo-1170x500.png',
    title: 'Lixo reciclável: Como trata-lo?',
  },
];
