import { AiFillCloseSquare } from 'react-icons/ai';
import { useMenu } from '../context/MenuProvider';
import './CartMenu.css';
import Cart from './Cart';
import { useOrder } from '../context/OrderProvider';

function CartMenu() {
  // const [isMenuOpen, setMenuOpen] = useState(true);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  const { isMenuOpen, toggleMenu } = useMenu();
  const { checkout } = useOrder();

  return (
    <div className={ `cart__menu ${isMenuOpen ? 'cart__menu--open' : ''}` }>
      <button
        className="cart__menu--closebtn"
        onClick={ toggleMenu }
      >
        <AiFillCloseSquare size={ 24 } />
      </button>
      <div className="cart__menu--content">
        CART MENU
        {/* Conteúdo do carrinho */}
        <Cart />
      </div>
      <div className="cart__menu--footer">
        <button onClick={ checkout }>ENVIAR O PEDIDO</button>
      </div>
    </div>
  );
}

export default CartMenu;
