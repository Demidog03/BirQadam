import { createContext, ReactNode, useState } from 'react';

interface NavbarCollapseContextValues {
  isCollapsed: boolean
  setIsCollapsed: (param: boolean) => void
}

export const NavbarCollapseContext = createContext<NavbarCollapseContextValues>({
  isCollapsed: true,
  setIsCollapsed: () => {}
});

export const NavbarCollapseProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <NavbarCollapseContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      { children }
    </NavbarCollapseContext.Provider>
  )
}
