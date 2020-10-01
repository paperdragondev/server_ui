import React, { ComponentProps } from 'react';
import MuiButton from '@material-ui/core/Button';

export type MaterialButtonProps = ComponentProps<typeof MuiButton>;

interface ButtonProps extends MaterialButtonProps {
  loading?: boolean;
  success?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
}

function Button({
  children,
  onClick,
  loading = false,
  success = false,
  disabled,
  variant,
  color,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <div>
      <MuiButton
        {...rest}
        color={color}
        onClick={onClick}
        disabled={loading || disabled}
        variant={variant || 'contained'}
      >
        {children}
      </MuiButton>
    </div>
  );
}

export default Button;
