import about from './about';
import home from './home';
import locations from './locations';
import other from './other';

export default {
  ...home,
  ...locations,
  ...about,
  ...other,
} as const;
