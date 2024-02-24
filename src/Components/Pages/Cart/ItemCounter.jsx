import React, { useContext } from 'react';
import { Context } from './../../../Utils/Context/AppContext';



const ItemCounter = () => {
    const {itemCount} = useContext(Context)
  return (
    <span className="item-count">{itemCount}</span>
  )
}

export default ItemCounter


