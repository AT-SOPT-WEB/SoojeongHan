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

export const recentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const recentKeywordStyle = css`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 1rem;

  border-radius: 20px;
  border: 1.5px solid #142755;

  button {
    font-size: 1.2rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  &:hover {
    background-color: #eceff5;
  }
`;

export const loadingSpinnerStyle = css`
  display: block;
  margin: 2rem auto;
  width: 4rem;
  height: 4rem;

  border: 5px solid #ccc;
  border-top: 5px solid #142755;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const errorMessageStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
`;
