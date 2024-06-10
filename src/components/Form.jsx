import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/utils';

const FormField = ({ render, name, message, ...props }) => {
  return render({
    ...props,
    id: name,
    name,
    htmlFor: name,
    message: message[name]?.[0],
  });
};

const FormItem = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const FormMessage = ({ message = '' }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

const StyledMessage = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-destructive);
  ${ellipsisStyle(1)};
`;

export { FormField, FormItem, FormMessage };
