import { useContext } from 'react';
import './App.css';
import CartMenu from './components/CartMenu';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={ `theme-${theme}` }>
      <Header />
      <CartMenu />
      <ProductList />
    </div>
  );
}

export default App;
