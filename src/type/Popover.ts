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
