export interface ButtonProps {
  text?: string
  backgroundColor?: string
  textColor?: string
  padding?: string
  textSize?: string | number
  textWeight?: string | number
  uppercase?: boolean
}

export interface TextProps {
  color?: string
  size?: string | number
  weight?: string | number
  uppercase?: boolean
  lineHeight?: string | number
  align?: 'left' | 'center' | 'right' | 'justify'
}

export interface SeparatorProps {
  thickness?: number | string
  length?: number | string
  color?: string
  vertical?: boolean
}

export interface ListScrollerProps {
  height?: string | number
  width?: string | number
  overflowY?: 'auto' | 'scroll' | 'hidden' | 'visible'
  padding?: string | number
}

export interface HeaderProps {
  size?: string | number
  weight?: string | number
  color?: string
  uppercase?: boolean
  paddingBottom?: string
  paddingTop?: string
  border?: string
  align?: 'left' | 'center' | 'right'
}
