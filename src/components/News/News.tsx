import Carousel from 'react-material-ui-carousel';

import { News as NewsType } from '../../content';
import { NewsCard } from '../NewsCard';

export interface NewsProps {
  news: NewsType[];
}

function News({ news }: NewsProps) {
  return (
    <Carousel sx={{ width: '100%', height: 'auto' }} navButtonsAlwaysVisible swipe cycleNavigation>
      {news.map((news, index) => (
        <NewsCard key={`news-${index}`} {...news} />
      ))}
    </Carousel>
  );
}

export default News;
