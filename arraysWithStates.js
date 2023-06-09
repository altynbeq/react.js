import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId){
    let nextProd = products.map( product => {
      if( product.id === productId ){
        return({
          ...product,
          count: product.count - 1
        })
      } else {
        return product
      }
    });

    let nextList = nextProd.filter( item => {
      return item.count > 0;
    });
    setProducts(nextList);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={ () => {
            handleDecreaseClick(product.id)
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
