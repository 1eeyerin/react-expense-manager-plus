import styled, { css } from 'styled-components';
import { colors } from '@/styles/constants';
import { hexToRGB } from '@/styles/utils';

const Badge = ({ className, variant = 'default', ...props }) => {
  return <StyledBadge className={className} $variant={variant} {...props} />;
};

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 50px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 1;
  height: 22px;
  font-weight: 600;
  transition: 0.15s ease-in-out;
  white-space: nowrap;

  ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return css`
          background-color: var(--color-secondary);
          color: var(--color-secondary-foreground);
          &:hover {
            background-color: ${hexToRGB(colors.secondary, 0.8)};
          }
        `;
      case 'destructive':
        return css`
          background-color: var(--color-destructive);
          color: var(--color-destructive-foreground);
          &:hover {
            background-color: ${hexToRGB(colors.destructive, 0.8)};
          }
        `;
      default:
        return css`
          background-color: var(--color-primary);
          color: var(--color-primary-foreground);
          &:hover {
            background-color: ${hexToRGB(colors.primary, 0.8)};
          }
        `;
    }
  }}
`;

export { Badge };
