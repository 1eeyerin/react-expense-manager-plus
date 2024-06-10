import { forwardRef } from 'react';
import styled from 'styled-components';

const Label = forwardRef(({ className, ...props }, ref) => (
  <StyledLabel ref={ref} className={className} {...props} />
));
const StyledLabel = styled.label`
  line-height: 20px;
  margin-bottom: 4px;
  display: block;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
`;

Label.displayName = 'Label';

export { Label };
