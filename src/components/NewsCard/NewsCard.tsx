import { Typography } from '@mui/material';
import { News } from '../../content';
import { Content, TitleArea } from './NewsCard.style';
import { useMemo } from 'react';

function NewsCard({ img, title, url, description }: News) {
  const blank = useMemo(() => url.startsWith('http'), [url]);

  return (
    <a href={url} target={blank ? '_blank' : undefined} rel={blank ? 'noreferrer' : undefined}>
      <Content sx={{ boxShadow: 0, backgroundImage: `url(${img})` }}>
        <TitleArea>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </TitleArea>
      </Content>
    </a>
  );
}

export default NewsCard;
