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
      <Carousel
        swipe
        duration={500}
        interval={3000}
        cycleNavigation
        navButtonsAlwaysVisible
        sx={{ width: '100%', height: 'auto' }}
      >
        {news.map((news, index) => (
          <NewsCard key={`news-${index}`} {...news} />
        ))}
      </Carousel>
    </Container>
  );
}

export default News;
