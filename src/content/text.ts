import home from './home';
import locations from './locations';
import other from './other';

export default {
  ...home,
  ...locations,
  ...other,
} as const;
