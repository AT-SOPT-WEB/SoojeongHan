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

export const recentKeywordStyle = css`
  display: inline-flex;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1.5px solid #142755;

  button {
    margin-left: 0.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: #eceff5;
  }
`;

export const loadingSpinnerStyle = {
  width: '40px',
  height: '40px',
  border: '5px solid #ccc',
  borderTop: '5px solid #142755',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '2rem auto',
  display: 'block',
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

export const errorMessageStyle = css`
  width: 100%;
  font-size: 1.8rem;
  font-weight: 500;
`;
