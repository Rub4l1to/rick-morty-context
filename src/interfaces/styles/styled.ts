export interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  third: string;
  fourth: string;
  bgPrimary: string;
}

export interface Fonts {
  primary: FontTypes;
  secondary: FontTypes;
}

export interface FontTypes {
  regular: string;
  medium?: string;
  semibold?: string;
  bold: string;
  extrabold?: string;
}
