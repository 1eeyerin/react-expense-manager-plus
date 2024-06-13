import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import styled from 'styled-components';
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
import { getPosts } from '@/api/posts';
import useAuthStore from '@/zustand/useAuthStore';
import usePostsStore from '@/zustand/usePostsStore';

const getFilterPosts = (month, posts = []) => {
  if (month === 0) return posts;
  return posts
    .filter((post) => dayjs(post.date).month() + 1 === month)
    .sort((a, b) => dayjs(b.date) - dayjs(a.date));
};

const ExpenseTable = () => {
  const userId = useAuthStore((state) => state.user.id);
  const navigate = useNavigate();
  const selectedMonth = usePostsStore((state) => state.selectedMonth);

  const { data, isLoading } = useQuery({
    queryKey: ['expenses'],
    queryFn: () => getPosts(),
  });

  if (isLoading) return null;

  const handleRowClick = (authorId, id) => {
    if (authorId !== userId) {
      alert('자신의 게시물만 수정할 수 있어요');
      return;
    }

    navigate(`/detail/${id}`);
  };

  const filteredPosts = getFilterPosts(selectedMonth, data);

  return (
    <StyledSection>
      <StyledTable>
        <TableCaption>A list of your most recent expense books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>번호</TableHead>
            <TableHead>지출 항목</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>작성자</TableHead>
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
                <TableCell>{post.author}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    onClick={() => handleRowClick(post.userId, post.id)}
                  >
                    {post.description}
                  </button>
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
      width: 100px;
    }
    &:nth-child(3) {
      width: 130px;
    }
    &:nth-child(4) {
      width: 100px;
    }
    &:nth-child(5) {
      width: calc(100% - 570px);
    }
    &:nth-child(6) {
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
