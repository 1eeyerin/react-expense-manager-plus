import styled from 'styled-components';

const Select = ({ children, title, ...props }) => {
  return (
    <StyledSelect {...props}>
      <SelectOption value="" text={title} />
      <SelectOption value="" disabled text="----------------" />
      {children}
    </StyledSelect>
  );
};

const SelectOption = ({ value, text, ...props }) => {
  return (
    <option value={value} {...props}>
      {text}
    </option>
  );
};

const StyledSelect = styled.select`
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--foreground);
  font-size: 14px;
  padding: 8px 12px;
  line-height: 20px;
  margin-top: 8px;
  width: 100%;
  background: var(--color-base-background) url('src/svg/arrow-down.svg')
    no-repeat right 12px center/ 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export { Select, SelectOption };
