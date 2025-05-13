import { css } from '@emotion/react';
import theme from '@styles/theme';

export const headerStyle = css`
  background-color: ${theme.color.purpleAccent};
  color: ${theme.color.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 10;
`;

export const headerContainerStyle = css`
  display: flex;
  padding: 3rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const leftMenuStyle = css`
  display: flex;
  gap: 6rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const hamburgerButtonStyle = css`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
  }
`;

export const menuLinkStyle = css`
  color: ${theme.color.white};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  &:hover {
    color: ${theme.color.purpleLight};
  }
`;

export const userContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: ${theme.color.white};
  p {
    margin: 0;
  }
`;

export const mobileMenuStyle = css`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: ${theme.color.purpleAccent};
  padding: 3rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;

  animation: slideIn 0.3s ease-out forwards;

  &.closed {
    animation: slideOut 0.3s ease-in forwards;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
