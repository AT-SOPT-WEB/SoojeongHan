import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa'; // Import FaTimes
import {
  headerStyle,
  menuLinkStyle,
  userContainerStyle,
  headerContainerStyle,
  mobileMenuStyle,
  hamburgerButtonStyle,
} from './Header.style';
import theme from '@styles/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header css={headerStyle}>
      <div css={headerContainerStyle}>
        <div
          css={{
            display: isMobileView ? 'none' : 'flex',
            gap: '6rem',
          }}
        >
          <Link to="/my/info" css={menuLinkStyle}>
            내 정보
          </Link>
          <Link to="/my/search" css={menuLinkStyle}>
            sopt 회원 조회하기
          </Link>
          <Link to="/" css={menuLinkStyle}>
            로그아웃
          </Link>
        </div>

        <button onClick={toggleMenu} css={hamburgerButtonStyle}>
          {isMenuOpen ? (
            <FaTimes size={24} color={theme.color.white} />
          ) : (
            <FaBars size={24} color={theme.color.white} />
          )}
        </button>

        <div css={userContainerStyle}>
          <FaUser size={20} />
          <p>사용자 이름</p>
        </div>
      </div>

      {isMenuOpen && isMobileView && (
        <div css={mobileMenuStyle}>
          <Link to="/my/info" css={menuLinkStyle}>
            내 정보
          </Link>
          <Link to="/my/search" css={menuLinkStyle}>
            sopt 회원 조회하기
          </Link>
          <Link to="/" css={menuLinkStyle}>
            로그아웃
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
