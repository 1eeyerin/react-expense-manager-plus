import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { numberWithCommas } from '@/utils';
import { CATEGORIES } from '@/constants';
import { Badge } from '@/components/Badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';

const getPosts = (month, posts) => {
  if (month === 0) return posts;
  return posts
    .filter((post) => dayjs(post.date).month() + 1 === month)
    .sort((a, b) => dayjs(b.date) - dayjs(a.date));
};

const ExpenseTable = () => {
  const { lists, selectedMonth } = useShallowEqualSelector(({ posts }) => {
    return {
      lists: posts.posts,
      selectedMonth: posts.selectedMonth,
    };
  });

  const filteredPosts = getPosts(selectedMonth, lists);

  return (
    <StyledSection>
      <StyledTable>
        <TableCaption>A list of your most recent expense books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>번호</TableHead>
            <TableHead>지출 항목</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>지출 내용</TableHead>
            <StyledTableHeadRight>금액</StyledTableHeadRight>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post, index) => {
            const categoryNames = CATEGORIES.find(
              (category) => category.id === post.category,
            );

            return (
              <TableRow key={post.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Badge>{categoryNames.name}</Badge>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>
                  <Link to={`/detail/${post.id}`}>{post.description}</Link>
                </TableCell>
                <StyledTableCellRight>
                  {numberWithCommas(post.price, '원')}
                </StyledTableCellRight>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  gap: 32px;
  padding: 24px;
  background-color: var(--color-base-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  margin-top: 24px;
`;

const StyledTable = styled(Table)`
  & th,
  & td {
    &:nth-child(1) {
      width: 60px;
    }
    &:nth-child(2) {
      width: 110px;
    }
    &:nth-child(3) {
      width: 130px;
    }
    &:nth-child(4) {
      width: calc(100% - 480px);
    }
    &:nth-child(5) {
      width: 140px;
    }
  }
`;

const StyledTableHeadRight = styled(TableHead)`
  text-align: right;
`;

const StyledTableCellRight = styled(TableCell)`
  text-align: right;
`;

export default ExpenseTable;
