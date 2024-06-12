import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import useAuthStore from '@/zustand/useAuthStore';
import Header from './Header';

const Container = () => {
  const isLogin = useAuthStore((state) => state.isLogin);

  return (
    <>
      {isLogin && <Header />}
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.main`
  max-width: 1200px;
  min-width: 800px;
  margin: 32px auto 48px;
  padding: 0 3%;
`;

export default Container;
