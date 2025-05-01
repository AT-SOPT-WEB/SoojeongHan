import {
  headerWrapperStyle,
  titleStyle,
  navStyle,
  navItemStyle,
} from './Header.style';

const Header = ({ selectedPage, onChangePage }) => {
  return (
    <header css={headerWrapperStyle}>
      <h1 css={titleStyle}>⚾ 숫자야구 || 깃허브 검색 😺</h1>
      <nav css={navStyle}>
        <div
          css={navItemStyle(selectedPage === '깃허브')}
          onClick={() => onChangePage('깃허브')}
        >
          깃허브 검색
        </div>
        <div
          css={navItemStyle(selectedPage === '야구')}
          onClick={() => onChangePage('야구')}
        >
          숫자 야구
        </div>
      </nav>
    </header>
  );
};

export default Header;
