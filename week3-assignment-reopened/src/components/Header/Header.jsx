import {
  headerWrapperStyle,
  titleStyle,
  navStyle,
  navItemStyle,
} from './Header.style';

const Header = ({ selectedTab, onChangeTab }) => {
  return (
    <header css={headerWrapperStyle}>
      <h1 css={titleStyle}>⚾ 숫자야구 || 깃허브 검색 😺</h1>
      <nav css={navStyle}>
        <div
          css={navItemStyle(selectedTab === '깃허브')}
          onClick={() => onChangeTab('깃허브')}
        >
          깃허브 검색
        </div>
        <div
          css={navItemStyle(selectedTab === '야구')}
          onClick={() => onChangeTab('야구')}
        >
          숫자 야구
        </div>
      </nav>
    </header>
  );
};

export default Header;
