import React from 'react';
import './styles/itemcard.css';
import { deleteProductsThunk, updateProductsThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ItemCart = ({prod}) => {

    const dispatch = useDispatch();

    const handleLess = () => {
        //
        if (prod?.quantity > 1) {
            dispatch(updateProductsThunk(prod.id, {
                "quantity": prod.quantity - 1,
            }))
        }
    }

    const hanldePlus = () => {
        //
        dispatch(updateProductsThunk(prod.id, {
            "quantity": prod.quantity + 1,
        }))
    }

    const handleDelete = () => {
        dispatch(deleteProductsThunk(prod.id))
    }

    console.log(prod)

  return (
    <article className='itemcard'>
        <h3 className='itemcard__title'>{prod.product?.title}</h3>
        <figure className='itemcard__img'>
            <img src={prod.product?.images[0].url} alt={`image-${prod?.product?.images[0].id}`} />
        </figure>
        <div className='itemcard__buttons'>
            <button onClick={handleLess} className='itemcard__'>-</button>
            <span className='itemcard__'>{prod.quantity}</span>
            <button onClick={hanldePlus} className='itemcard__'>+</button>
        </div>
        <button className='itemcard__btn-delete' onClick={handleDelete}>delete</button>
        <p className='itemcard__total'>Total: $
            <span className='itemcard__'>{prod.product?.price * prod.quantity}</span>
        </p>
    </article>
  )
}

export default ItemCart