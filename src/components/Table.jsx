import styled from 'styled-components';
import { colors } from '@/styles/constants';
import { hexToRGB } from '@/styles/utils';

const Table = styled.table`
  position: relative;
  width: 100%;
  overflow: auto;
  table-layout: fixed;
`;

const TableHeader = styled.thead`
  & tr {
    border-bottom: 1px solid var(--color-border);
    ${(props) => props.className}
  }
`;

const TableBody = styled.tbody`
  & tr:last-child {
    border-bottom: none;
    ${(props) => props.className}
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${hexToRGB(colors.muted, 0.5)};
  }

  ${(props) => props.className}
`;

const TableHead = styled.th`
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  color: var(--color-muted-foreground);

  ${(props) => props.className}
`;

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  line-height: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${(props) => props.className}
`;

const TableCaption = styled.caption`
  margin-top: 16px;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-muted-foreground);
  caption-side: bottom;

  ${(props) => props.className}
`;

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
};
