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
  justify-content: left;
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
  border-radius: 20px;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1.5px solid #142755;

  button {
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
export const cardStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 6rem;
  gap: 2rem;
  border-radius: 20px;
  background-color: #5f84a2;
  color: white;
`;

export const closeButtonStyle = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #cadeed;
  font-size: 2rem;
  cursor: pointer;
`;

export const imageStyle = css`
  width: 20rem;
  border-radius: 100%;
  border: 5px solid #cadeed;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const nameStyle = css`
  font-size: 2.2rem;
  font-weight: 500;
  color: white;
  text-align: center;
  text-decoration: none;
`;

export const followInfoWrapper = css`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const followInfoItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: 500;
  border-radius: 5px;
  background-color: #cadeed;
  color: #142755;
`;
