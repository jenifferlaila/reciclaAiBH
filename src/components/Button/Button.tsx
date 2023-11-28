import { ButtonProps, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.style';

function Button({ children, ...props }: ButtonProps) {
  const { palette } = useTheme();

  return (
    <StyledButton
      {...props}
      sx={{ color: palette.text.primary, ...props.sx }}
      LinkComponent={props.href ? Link : undefined}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
