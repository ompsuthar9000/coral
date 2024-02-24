import React from 'react'
import "./Top-Main.scss"
import Imageprod from "../../../assets/image-product.png"
import Vector from "../../../assets/Frame.png"
import Vector1 from "../../../assets/Frame1.png"
import { BiShoppingBag } from "react-icons/bi";
const TopMain = () => {
  return (
    <div className='Top_Main'>
      <div className="vector">
        <img src={Vector1} alt="" />
      </div>
      <div className='title_main'>
        <h1>
          Collections
        </h1>
        <h3>
          you can explore ans shop many differnt collection
          from various barands here.
        </h3>
        <button><BiShoppingBag />Shop Now</button>
      </div>
      <div className='img'>
        <img src={Imageprod} alt="" />
      </div>
      <div className="vector">
        <img src={Vector} alt="" />
      </div>
    </div>
  )
}

export default TopMain