import { css } from '@emotion/react';
import theme from '@styles/theme';

export const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${theme.color.purpleAccent};
  color: ${theme.color.white};
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const headerContainerStyle = css`
  display: flex;
  padding: 3rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: ${theme.color.purpleAccent};
  padding: 3rem;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const overlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const closeStyle = css`
  animation: slideOut 0.3s ease-in forwards;

  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;
