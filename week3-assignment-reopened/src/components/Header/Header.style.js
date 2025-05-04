import { css } from '@emotion/react';

export const headerWrapperStyle = css`
  padding: 2rem;
  text-align: center;
  color: white;
  background-color: #142755;
`;

export const titleStyle = css`
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  font-weight: 500;
`;

export const navStyle = css`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const navItemStyle = (active) => css`
  padding: 1rem 1.6rem;
  border-radius: 8px;
  font-size: 1.8rem;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #6b74aa;
    transform: translateY(-2px);
  }

  ${active &&
  css`
    background-color: white;
    color: #142755;
    font-weight: 500;
  `}
`;
