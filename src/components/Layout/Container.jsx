import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Container = () => {
  return (
    <>
      <Header />
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
