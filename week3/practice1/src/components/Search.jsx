// 제가 작성한 코드

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const searchContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const buttonStyle = css`
  width: 5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  background-color: lemonchiffon;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #fff888;
    transition: background-color 0.3s ease;
  }
`;

const inputStyle = css`
  width: 40rem;
  border-radius: 0.5rem;
  border: 1px solid #eee;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const Search = ({ search, handleSearchChange, handleSearch }) => {
  return (
    <div css={searchContainerStyle}>
      <input
        type='text'
        value={search}
        onChange={handleSearchChange}
        placeholder='검색어를 입력하세요'
        css={inputStyle}
      />
      <button css={buttonStyle} onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default Search;
