// const carrinho = {
//   produtos: [
//     { id: 1, nome: 'Produto 1', preco: 10.0, quantidade: 1 },
//   ],
//   total: 0,
// };

import { useOrder } from '../context/OrderProvider';
import './Cart.css';

function Cart() {
  const { cart, removeProduct } = useOrder();
  return (
    <div className="cart">
      <h2>Carrinho</h2>
      <ul>
        {cart.products.map((produto) => (
          <li key={ produto.id }>
            <span>
              {produto.quantity}

            </span>
            {`- ${produto.name}`}
            {' '}
            - R$
            {produto.price}
            {' '}
            <button onClick={ () => removeProduct(produto.id) }>Remover</button>
          </li>
        ))}
      </ul>
      <p>
        Total: R$
        {cart.total}
      </p>
    </div>
  );
}

export default Cart;
