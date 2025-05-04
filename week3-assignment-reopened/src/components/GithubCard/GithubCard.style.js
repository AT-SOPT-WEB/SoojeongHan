import { css } from '@emotion/react';

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
  font-size: 2rem;
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

  font-size: 2rem;
  font-weight: 500;
  border-radius: 5px;
  background-color: #cadeed;
  color: #142755;
`;
