import styled from 'styled-components';
import { Button } from '../Button';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledHeading>🍀 My Todo List</StyledHeading>
        <Button variant="secondary" href="/">
          @1eeyerin
        </Button>
        <StyledImg
          src="https://avatars.githubusercontent.com/u/40863185?v=4"
          alt=""
        />
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  flex-grow: 1;
`;

const StyledNav = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export default Header;
