import { css } from '@emotion/react';

export const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 2.5rem;
  width: 60%;
`;

export const inputStyle = css`
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.5rem;

  border-radius: 20px;
  border: 1.5px solid #142755;
  background-color: #eceff5;

  &:focus {
    outline: none;
  }
`;

export const messageStyle = css`
  font-size: 2rem;
  font-weight: 500;
  color: #404c7e;
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  width: 100%;
  font-size: 2rem;

  li {
    padding: 1.5rem;
    border: 1.5px solid #142755;
    border-radius: 20px;
  }
`;
