const Header = ({ selectedPage, onChangePage }) => {
  return (
    <header>
      <h1>⚾ 숫자야구 || 깃허브 검색 😺</h1>
      <nav>
        <div
          onClick={() => onChangePage("깃허브")}
          style={{ fontWeight: selectedPage === "깃허브" ? "bold" : "normal" }}
        >
          깃허브 검색
        </div>
        <div
          onClick={() => onChangePage("야구")}
          style={{ fontWeight: selectedPage === "야구" ? "bold" : "normal" }}
        >
          숫자 야구
        </div>
      </nav>
    </header>
  );
};
export default Header;
