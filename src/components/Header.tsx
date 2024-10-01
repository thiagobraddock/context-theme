import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import { useTheme } from '../context/ThemeProvider';
import './Header.css';
import { useMenu } from '../context/MenuProvider';
import { useOrder } from '../context/OrderProvider';

function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleMenu } = useMenu();
  const { cart } = useOrder();
  const { theme, toggleTheme } = useTheme();
  const [pulse, setPulse] = useState(false);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    if (pulse) {
      const timer = setTimeout(() => {
        setPulse(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pulse]);

  const productsInCart = cart.products.reduce((total, prod) => prod.quantity + total, 0);

  useEffect(() => {
    if (productsInCart > prevCount) {
      setPulse(true);
    }
    setPrevCount(productsInCart);
  }, [productsInCart, prevCount]);

  return (
    <header>
      <h1>Context API</h1>
      <div className="icons">
        <button onClick={ toggleTheme }>
          { theme === 'light' && <MdDarkMode size={ 18 } className="icon" /> }
          { theme === 'dark' && <MdLightMode size={ 18 } className="icon" /> }
        </button>
        <button className="shopping__cart" onClick={ toggleMenu }>
          <TiShoppingCart size={ 18 } />
          <span className={ pulse ? 'pulse' : '' }>{ productsInCart }</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
