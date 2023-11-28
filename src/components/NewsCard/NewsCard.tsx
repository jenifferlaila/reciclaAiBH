import { Typography } from '@mui/material';
import { News } from '../../content';
import { Content, TitleArea } from './NewsCard.style';

function NewsCard({ img, title, url }: News) {
  return (
    <a href={url}>
      <Content sx={{ boxShadow: 0, backgroundImage: `url(${img})` }}>
        <TitleArea>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </TitleArea>
      </Content>
    </a>
  );
}

export default NewsCard;
