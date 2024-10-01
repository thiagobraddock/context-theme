import { IoIosAddCircle } from 'react-icons/io';
import { products } from '../data/produtos';
import './ProductList.css';
import { useOrder } from '../context/OrderProvider';

function ProductList() {
  const { addProduct } = useOrder();
  return (
    <div className="product__list">
      <h2>Produtos</h2>
      <ul>
        {products.map((produto) => (
          <li key={ produto.id }>
            {produto.name}
            {' '}
            - R$
            {produto.price}
            <button onClick={ () => addProduct(produto) }>
              COMPRAR
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
