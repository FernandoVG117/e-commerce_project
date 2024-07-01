import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homepage/ProductCard';
import './styles/homepage.css';
import FilterPrice from '../components/homepage/FilterPrice';
import FilterSelect from '../components/homepage/FilterSelect';

const HomePage = () => {

  const [inputValue, setInputValue] = useState('');
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });
  const [categoryValue, setCategoryValue] = useState('');
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const textInput = useRef()
  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  }

  const callbackFilter = (product) => {
    const name = product.title.toLowerCase().includes(inputValue);
    const price = +product.price <= +inputPrice.max && +product.price >= +inputPrice.min;
    const category = categoryValue === '' ? true : product.categoryId === +categoryValue;
    return name && price && category;
  }

  // console.log(products)

  return (
    <div className='homepage'>
      
      <div className='homepage__filters'>
        <div className='homepage__filter-price'>
          <FilterPrice 
            setInputPrice={setInputPrice}
          />
        </div>
        <div className='homepage__filter-selector'>
          <FilterSelect
            setCategoryValue={setCategoryValue}
          />
        </div>
      </div>
      <div className='homepage__container'>
        <div className='homepage__search'>
          <input 
            type="text" 
            onChange={handleChange} 
            ref={textInput} 
            className='homepage__input'
          />
          <button>🔍</button>  
          <span>
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </div>
        {
          products?.filter(callbackFilter).map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default HomePage