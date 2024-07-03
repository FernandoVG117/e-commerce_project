import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import ProductCard from '../homepage/ProductCard';
import './styles/prodsimilar.css';

const ProdSimilar = ({ product }) => {

  const [items, getItems] = useFetch();

  useEffect(() => {
    const path = `products?categoryId=${product?.categoryId}`;
    getItems(path);
  }, [])
  
  const cbFilter = (prod) => {
    return prod.id !== product.id
  }
  
  
  console.log(items)

  return (
    <div className='prodsimilar'>
      <h2>Discover similar items</h2>
      <div className='homepage__container'>
        {
          items?.filter(cbFilter).map((prod) => (
            <ProductCard 
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}
 
export default ProdSimilar