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
export interface SidebarProps {
  height?: string | number
  width?: string | number
  overflowY?: 'auto' | 'scroll' | 'hidden' | 'visible'
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
