import React from 'react';
import './styles/purchasecard.css';

const PurchaseCard = ({purchase}) => {

  // console.log(purchase)

  return (
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
  )
}

export default PurchaseCard