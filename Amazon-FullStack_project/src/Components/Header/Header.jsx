
import React from 'react'
import Class from "./Header.module.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AmazonLogo from "../../assets/NewLogo.png"
import FlagLogo from "../../assets/flag-logo.webp"
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <div>
       
       <section className={Class.MainHeaderContainer}>
        <div className={Class.FirstOne}>
        <div>
        <a className={Class.AmazonLogo} href=""><img src={AmazonLogo} alt="" /></a>
        </div>
       
        <section className={Class.AllLinks}>
        <div className={Class.Second}>
        <a className={Class.location} href=""><LocationOnOutlinedIcon /></a>
        </div>
        <div className={Class.TwoLocationHolder}>
        <a className={Class.DeliveringAnchor} href="">Delivering to Maryland</a>
        <a className={Class.UpdateLocationAnchor} href="">Update location</a>
        </div>
        </section>
        </div>
        <section class={Class.MiddleWrapper}>
        <div class={Class.AllButtonBox}>
        <button className={Class.AllButton}>All</button>
        </div>
        <div className={Class.InputBox}>
        <input className={Class.Input} type="text" placeholder='Search Amazon' />
        </div>
        <div className={Class.SearchBox}>
        <a href=""><SearchIcon className={Class.SearchIcon}/></a>
        </div>
        </section>
        <section class={Class.EndWrapper}>
         <div className={Class.Allthreeholder}>
        <div className={Class.FlagLogoBox}>
       <a href=""><img src={FlagLogo} alt="" /></a>
          </div>
          <div className={Class.EnBox}>
          <a className={Class.EN} href="">EN</a>
          </div>
          <div className={Class.ArrowBox}>
          <a href=""><ArrowDropDownOutlinedIcon className={Class.insideArrow}/></a>
          </div>
          </div> 

          <div className={Class.signAccountBox}>
          <a className={Class.Hello} href="">Hello</a>
         <a className={Class.AccountAnchor} href="">Account & Lists</a>
         </div>

          <div  className={Class.returnOrderBox}>
          <div className={Class.ReturnsAndOrdersBox}>
            <a className={Class.ReturnsAndOrders} href="">Returns</a>
         </div>
          <div className={Class.SecondOrderAnchorBox}>
          <a className={Class.SecondOrderAnchor}href="">&Orders</a>
          </div>
          </div>
          <div className={Class.CartHolderBox}>
          <div className={Class.CartBox}>
           <a className={Class.CartNumber} href="">0</a>
          </div>
          <div className={Class.InsideCartBox}>
          <a href=""><IoCartOutline className={Class.InsideCart}/></a>
          </div>
          </div>
          <div className={Class.ActualCartBox}>
           <a className={Class.ActualCart} href="">Cart</a>
           </div>
        </section>
        </section>
        
        

    </div>
  )
}

export default Header
