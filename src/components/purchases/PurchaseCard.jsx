import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/purchasecard.css';

const PurchaseCard = ({purchase}) => {

  const navigate = useNavigate()

  return (
    <li className='purchasecard__item' onClick={() => navigate(`/product/${purchase?.product.id}`)}>
      <figure className='purchasecard__img'>
        <img src={purchase?.product.images[0].url} 
          alt={`product-${purchase?.product.id}`} />
      </figure>
      <div className='purchasecard__name'>{purchase.product?.title}</div>
      <div className='purchasecard__quantity'>
        <div className="purchasecard__box">{purchase?.quantity}</div>
      </div>
      <div className="purchasecard__price">
        $ {purchase.product?.price * purchase?.quantity}
      </div>
    </li>







    /*
    <article className='purchasecard'>
      <figure className='purchasecard__img'>
        <img src={purchase?.product.images[0].url} alt={purchase?.product.title} />
      </figure>
      <div className='purchasecard__details'>
        <h3 className='purchasecard__name'>{purchase?.product.title}</h3>
        <ul className='purchasecard__list'>
          <li className='purchasecard__item'>
            <span>Quantity: </span><span>{purchase?.quantity}</span>
          </li>
          <li className='purchasecard__item'>
            <span>Unity Price: </span><span>${purchase?.product.price}</span>
          </li>
          <li className='purchasecard__item'>
            <span>Total Price: </span><span>${purchase?.product.price * purchase?.quantity}</span>
          </li>
        </ul>
      </div>
    </article>
    */
  )
}

export default PurchaseCard