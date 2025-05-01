import { useState } from 'react';
import Header from './components/Header/Header';
import GithubSearch from './components/GithubSearch/GithubSearch';
import NumberBaseballGame from './components/NumberBaseballGame/NumberBaseballGame';
import { Global } from '@emotion/react';
import Reset from './styles/global';

function App() {
  const [page, setPage] = useState('깃허브');

  const pages = {
    깃허브: <GithubSearch />,
    야구: <NumberBaseballGame />,
  };

  return (
    <>
      <Global styles={Reset} />
      <div
        style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header selectedPage={page} onChangePage={setPage} />
        <main
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {pages[page]}
        </main>
      </div>
    </>
  );
}

export default App;
