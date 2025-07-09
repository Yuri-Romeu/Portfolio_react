import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { Props } from '.';

declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string;
    corSecundaria: string;
  }
}

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-height: 22px;
`;
