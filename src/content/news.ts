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
];
