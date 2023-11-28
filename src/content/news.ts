export type News = {
  url: string;
  img: string;
  title: string;
  description?: string;
};

export const news: News[] = [
  {
    url: '/mais',
    img: '/recycle.svg',
    title: 'Noticia teste 1',
    description: 'Essa e uma noticia de teste bem interessante e legal',
  },
  {
    url: '/mais',
    img: '/Capa.png',
    title: 'Noticia teste 2',
    description: 'Essa e uma noticia de teste bem interessante e legal',
  },
  {
    url: '/mais',
    img: '/recycling-2.svg',
    title: 'Noticia teste 3',
    description: 'Essa e uma noticia de teste bem interessante e legal',
  },
];
