import '@emotion/react';
import { ColorType } from '@/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
  }
}
