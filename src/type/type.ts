export interface buttonProps {
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

export interface PopoverItem {
  id: string
  label: string
}

export interface popoverProps {
  position?: 'top' | 'right' | 'bottom' | 'left'
  heading?: string
  icon?: string | object
  contentItems?: PopoverItem[]
}
