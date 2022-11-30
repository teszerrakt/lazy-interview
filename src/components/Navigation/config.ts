export interface NavItem {
  name: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', to: '/' },
  { name: 'Favorites', to: '/favorites' },
]
