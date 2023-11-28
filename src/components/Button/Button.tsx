import { ButtonProps, useTheme } from '@mui/material';
import { StyledButton } from './Button.style';

function Button({ children, ...props }: ButtonProps) {
  const { palette } = useTheme();

  return (
    <StyledButton {...props} sx={{ color: palette.text.primary, ...props.sx }}>
      {children}
    </StyledButton>
  );
}

export default Button;
