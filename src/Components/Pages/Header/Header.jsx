import React from 'react'
import "./Header.scss"
import Heder_Navbar from './Heder_Navbar';
import { FaMagnifyingGlass } from "react-icons/fa6";
import Logo from "../../../assets/logo.png"
import { IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom"
import ItemCounter from '../Cart/ItemCounter';
const Header = () => {
    const Navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="serchbar">
                    <FaMagnifyingGlass />
                </div>
                <div className="logo cursor-pointer">
                    <img src={Logo} alt="" onClick={() => Navigate('/')} />
                </div>

                <div className='utility'>
                    <div className='login_reg'>

                        <li className='login' onClick={() => Navigate('/login')} >
                            <IoPersonOutline /> login
                        </li>
                        <li onClick={() => Navigate('/signup')} >
                            Register
                        </li>
                    </div>
                    <div className="cart_div">

                        <li className='cartsvg' onClick={() => Navigate('/cart')}>
                            <ItemCounter/>
                            <BiShoppingBag />Cart</li>
                    </div>
                </div>
            </div>
            <Heder_Navbar />
        </>
    )
}

export default Header