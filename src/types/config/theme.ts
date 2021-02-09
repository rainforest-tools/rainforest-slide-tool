export interface IBreakPoints<T> {
  sm?: T
  md?: T
  lg?: T
  xl?: T
  xl2?: T
}

export interface ISizeTheme {
  buttonSize?: IBreakPoints<string>
}

export interface IText<T> {
  text?: T
  subtitle?: T
  title?: T
}

export interface IColorTheme {
  textColor?: IText<string>
}

export interface ITheme {
  sizeTheme?: ISizeTheme
  colorTheme?: IColorTheme
}

export interface IThemeConfigure {
  name: string
  description?: string
  dark?: ITheme
  light?: ITheme
}