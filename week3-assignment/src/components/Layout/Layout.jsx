import { appWrapperStyle, mainStyle } from './Layout.style';

const Layout = ({ children, header }) => {
  return (
    <div css={appWrapperStyle}>
      {header}
      <main css={mainStyle}>{children}</main>
    </div>
  );
};

export default Layout;
