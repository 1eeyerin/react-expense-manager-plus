import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledHeading>🍀 My Todo List</StyledHeading>
        <StyledLink to="/">@1eeyerin</StyledLink>
        <StyledImg
          src="https://avatars.githubusercontent.com/u/40863185?v=4"
          alt=""
        />
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #f9fbfc;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  padding: 8px 16px;
  font-weight: 500;
  line-height: 20px;

  &:hover {
    background-color: #f1f5f9;
  }
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
