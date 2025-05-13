import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import {
  headerStyle,
  menuLinkStyle,
  userContainerStyle,
  headerContainerStyle,
  mobileMenuStyle,
  hamburgerButtonStyle,
  overlayStyle,
  closeStyle,
} from '@shared/components/Header/Header.style';
import theme from '@styles/theme';
import routePath from '@routes/routhPath';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isMobileView] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 300);
    }
  };

  return (
    <header css={headerStyle}>
      <div css={headerContainerStyle}>

        <div css={{ display: isMobileView ? 'none' : 'flex', gap: '6rem' }}>
          <Link
            to={routePath.MYINFO}
            css={menuLinkStyle}
            onClick={handleMenuItemClick}
          >
            내 정보
          </Link>
          <Link
            to={routePath.MYSEARCH}
            css={menuLinkStyle}
            onClick={handleMenuItemClick}
          >
            sopt 회원 조회하기
          </Link>
          <Link
            to={routePath.LOGIN}
            css={menuLinkStyle}
            onClick={handleMenuItemClick}
          >
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

      {(isMenuOpen || isMenuClosing) && (
        <>
          <div css={overlayStyle} onClick={toggleMenu} />

          <div css={[mobileMenuStyle, isMenuClosing ? closeStyle : '']}>
            <Link
              to={routePath.MYINFO}
              css={menuLinkStyle}
              onClick={handleMenuItemClick}
            >
              내 정보
            </Link>
            <Link
              to={routePath.MYSEARCH}
              css={menuLinkStyle}
              onClick={handleMenuItemClick}
            >
              sopt 회원 조회하기
            </Link>
            <Link
              to={routePath.LOGIN}
              css={menuLinkStyle}
              onClick={handleMenuItemClick}
            >
              로그아웃
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
