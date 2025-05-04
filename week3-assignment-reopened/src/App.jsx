import { useState } from 'react';
import { Global } from '@emotion/react';
import globalStyle from './styles/global';
import Header from './components/Header/Header';
import GithubSearch from './components/GithubSearch/GithubSearch';
import NumberBaseballGame from './components/NumberBaseballGame/NumberBaseballGame';
import Layout from './components/Layout/Layout';

function App() {
  const [tab, setTab] = useState('깃허브');

  const tabs = {
    깃허브: <GithubSearch />,
    야구: <NumberBaseballGame />,
  };

  return (
    <>
      <Global styles={globalStyle} />
      <Layout header={<Header selectedTab={tab} onChangeTab={setTab} />}>
        {tabs[tab]}
      </Layout>
    </>
  );
}

export default App;
