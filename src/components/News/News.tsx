import Carousel from 'react-material-ui-carousel';

import { News as NewsType } from '../../content';
import { NewsCard } from '../NewsCard';
import { Container } from './News.style';

export interface NewsProps {
  news: NewsType[];
}

function News({ news }: NewsProps) {
  return (
    <Container>
      <Carousel sx={{ width: '100%', height: 'auto' }} navButtonsAlwaysVisible swipe cycleNavigation>
        {news.map((news, index) => (
          <NewsCard key={`news-${index}`} {...news} />
        ))}
      </Carousel>
    </Container>
  );
}

export default News;
