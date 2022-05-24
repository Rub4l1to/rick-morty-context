// styled.d.ts
import 'styled-components';

//* Interfaces
import { Colors, BreakPoints, Fonts } from 'interfaces/styles/styled';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakpoints: BreakPoints;
    fonts: Fonts;
  }
}
