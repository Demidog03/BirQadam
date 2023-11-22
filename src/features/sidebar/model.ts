import { ReactNode } from 'react';

export interface TSidebarMenuItem {
  icon: ReactNode,
  isActive: boolean,
  text: string,
  routeName: string
}