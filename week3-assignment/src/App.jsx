import { useState } from 'react';
import { Global } from '@emotion/react';
import Reset from './styles/global';
import Header from './components/Header/Header';
import GithubSearch from './components/GithubSearch/GithubSearch';
import NumberBaseballGame from './components/NumberBaseballGame/NumberBaseballGame';
import { appWrapperStyle, mainStyle } from './App.style';

function App() {
  const [tab, setTab] = useState('깃허브');

  const tabs = {
    깃허브: <GithubSearch />,
    야구: <NumberBaseballGame />,
  };

  return (
    <>
      <Global styles={Reset} />
      <div css={appWrapperStyle}>
        <Header selectedTab={tab} onChangeTab={setTab} />
        <main css={mainStyle}>{tabs[tab]}</main>
      </div>
    </>
  );
}

export default App;
