import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAuthStore from '@/zustand/useAuthStore';
import LogoutButton from './LogoutButton';

const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/40863185?v=4';

const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledHeading to="/">🍀 My Todo List</StyledHeading>
        <StyledLink to="/edit-profile">
          <StyledName>{`@${user.nickname}`}</StyledName>
          <StyledImg src={user.avatar || DEFAULT_AVATAR} alt="" />
        </StyledLink>
        <LogoutButton />
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

const StyledHeading = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledNav = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export default Header;
