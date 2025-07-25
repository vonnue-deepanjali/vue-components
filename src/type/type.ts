import type { IconName } from '@/Components/Icon/IconMap'

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

export interface IconProps {
  name: IconName
  color?: string
}

export interface DropDownItem {
  id: string
  label: string
}

export interface DropDownSelectionProps {
  title?: string
  items?: DropDownItem[][]
  color?: string
  hoverColor?: string
}
