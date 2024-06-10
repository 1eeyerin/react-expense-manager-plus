import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return <StyledInput type={type} className={className} ref={ref} {...props} />;
});

const StyledInput = styled.input`
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--foreground);
  font-size: 14px;
  padding: 8px 12px;
  background: var(--color-base-background);
  line-height: 20px;
  margin-top: 8px;
  width: 100%;
`;

Input.displayName = 'Input';

export { Input };
