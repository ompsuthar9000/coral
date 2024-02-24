import React from 'react'
import "./ProdCard.scss"
import { BiShoppingBag } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const ProdCard = ({  product, price, img, category, id }) => {
  const Navigate = useNavigate()
  return (
    <div className='Card_main' onClick={() => Navigate(`/product/${id}`)}>
      <div className='image_div'>
        <img src={img} alt="" />
      </div>
      <div className='overlay_div'>
        <div className='overlay_div-icons'>
          <FaRegHeart />
          <IoSearchOutline />
        </div>
        <button><BiShoppingBag />Shop Now</button>
      </div>
      <div className='title_div'>
        <div className='title_div-top'>
          <h3>{product}</h3>
        </div>
        <div className='title_div-bottom'>
          <p>{category}</p>
          <h2>&#36; {price}</h2>
        </div>

      </div>
    </div>
  )
}

export default ProdCard