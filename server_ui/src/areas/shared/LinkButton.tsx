import React from 'react';
import Button, { MaterialButtonProps } from './Button';
import { Link } from 'react-router-dom';

interface ButtonProps extends MaterialButtonProps {
  loading?: boolean;
  success?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  path: string;
}

function LinkButton({
  children,
  onClick,
  loading = false,
  success = false,
  disabled,
  variant,
  color,
  path,
}: ButtonProps): JSX.Element {
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={path}>
        <Button
          color={color}
          onClick={onClick}
          disabled={loading || disabled}
          variant={variant || 'contained'}
        >
          {children}
        </Button>
      </Link>
    </div>
  );
}

export default LinkButton;
