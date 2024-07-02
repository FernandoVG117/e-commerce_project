import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import PurchaseCard from '../components/purchases/PurchaseCard'
import './styles/purchases.css'

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [])

  // 
  const groupByDate = (items) => {
    return items.reduce((cv, item) => {
      const date = item.createdAt.split('T')[0];
      if (!cv[date]) {
        cv[date] = []
      }
      cv[date].push(item);
      return cv;
    }, {});
  };

  const groupPurchases = groupByDate(purchasesSlice)
  
  // console.log(groupPurchases)

  return (
    <div className='purchases'>
     {
      Object.keys(groupPurchases)?.map((date) => (
        <div key={date} className='purchases__container'>
          <h2 className='purchases__date'>{date}</h2>
          <div className='purchases__cards'>
            {
              groupPurchases[date].map((item) => (
                <PurchaseCard 
                  key={item.id}
                  purchase={item}
                />
              ))
            }
          </div>
        </div>
      ))
     }
    </div>
  )
}

export default Purchases