import { useContext, useState } from 'react';
import MenuContext from './MenuContext';

function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={ { isMenuOpen, toggleMenu } }>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;

// deveria estar em um arquivo separado
export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('Menu Context não pode ser usado fora de um provider');
  }
  return context;
}
