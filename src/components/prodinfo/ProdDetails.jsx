import React from 'react';
import './styles/proddetails.css'
import { useSelector } from 'react-redux';

const ProdDetails = ({ product }) => {

  // const store = useSelector((store) => store.products);

  // console.log(store)

  return (
    <article className='proddetails'>
      <div className="proddetails__title">
        <span className="proddetails__title-brand">{product?.brand}</span>
        <h3 className="proddetails__title-name">{product?.title}</h3>
      </div>
      <div className="proddetails__buy">
        <div className="proddetails__buy-details">
          <div className="proddetails__buy-details-price">
            <span>Price</span>
            <span>${product?.price}</span>
          </div>
          <div className="proddetails__buy-details-quantity">
            <span>Quantity</span>
            <div className="proddetails__buy-details-quantity-btns">
              <button>
                <ion-icon name="caret-down-outline"></ion-icon>
              </button>
              <span>
                {}
              </span>
              <button>
                <ion-icon name="caret-up-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className='proddetails__details'>
          <p>{product?.description}</p>
        </div>
      </div>
    </article>
  )
}

export default ProdDetails