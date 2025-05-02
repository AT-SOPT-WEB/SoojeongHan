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

export const cardStyle = css`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 3rem 6rem;
  gap: 2rem;

  border-radius: 20px;
  background-color: #5f84a2;
  color: #fff;
`;

export const closeButtonStyle = css`
  position: absolute;
  top: 1rem;
  right: 1rem;

  border: none;
  font-size: 2rem;
  color: #cadeed;
  background: none;
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
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  color: white;
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
