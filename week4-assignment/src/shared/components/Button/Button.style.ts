import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const buttonStyle = (disabled: boolean) => css`
  padding: 2rem 2.5rem;
  font-size: 2rem;
  border-radius: 6px;
  border: none;
  cursor: 'pointer';
  background-color: ${disabled
    ? theme.color.gray300
    : theme.color.purpleAccent};
  color: ${disabled ? theme.color.gray600 : theme.color.white};
  transition: background-color 0.2s ease;
  width: 100%;
  &:hover {
    background-color: ${!disabled && theme.color.purpleDark};
  }
`;
