import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@/styles/constants';
import { hexToRGB } from '@/styles/utils';

const Button = forwardRef(
  (
    {
      className,
      type = 'button',
      variant = 'default',
      size = 'default',
      fullWidth = false,
      href,
      ...props
    },
    ref,
  ) => {
    const Comp = href ? StyledLink : StyledButton;
    return (
      <Comp
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.15s ease-in-out;
`;

const variantStyles = {
  default: css`
    background-color: var(--color-primary);
    color: var(--color-primary-foreground);
    &:hover {
      background-color: ${hexToRGB(colors.primary, 0.9)};
    }
  `,
  destructive: css`
    background-color: var(--color-destructive);
    color: var(--color-destructive-foreground);
    &:hover {
      background-color: ${hexToRGB(colors.destructive, 0.9)};
    }
  `,
  secondary: css`
    background-color: var(--color-secondary);
    color: var(--color-secondary-foreground);
    &:hover {
      background-color: ${hexToRGB(colors.secondary, 0.8)};
    }
  `,
};

const sizeStyles = {
  default: css`
    height: 40px;
    padding: 8px 16px;
  `,
};

const StyledButton = styled.button`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
`;

const StyledLink = styled.a`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
`;

Button.displayName = 'Button';

export { Button };
