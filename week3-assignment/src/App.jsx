import { useState } from "react";
import Header from "./components/Header";
import GithubSearch from "./components/GithubSearch";
import NumberBaseballGame from "./components/NumberBaseballGame";

function App() {
  const [page, setPage] = useState("깃허브");

  const pages = {
    깃허브: <GithubSearch />,
    야구: <NumberBaseballGame />,
  };

  return (
    <>
      <Header selectedPage={page} onChangePage={setPage} />
      {pages[page]}
    </>
  );
}

export default App;
