import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const inputWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const labelStyle = css`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.color.gray700};
`;

export const inputStyle = css`
  width: 100%;
  padding: 2rem 2.5rem;
  font-size: 2rem;
  border: 1px solid ${theme.color.purpleLight};
  border-radius: 6px;
  color: ${theme.color.black};
  background-color: ${theme.color.white};

  &::placeholder {
    color: ${theme.color.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${theme.color.purpleAccent};
    box-shadow: 0 0 0 2px ${theme.color.purpleAccentLight};
  }
`;

export const iconStyle = css`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.color.gray600};
  font-size: 1.6rem;
`;
