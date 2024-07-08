import React from 'react'
import Class from "./HEARow.module.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function HeaderRow() {
  return (
    <div>
      <section className={Class.MainContainer}>
        <section className={Class.FirstSeventheen}>
          <div className={Class.HumburgerAndAllBox}>
            <li><a href=""><MenuIcon/></a></li>
            <li><a href="">All</a></li>
          </div>
          <div className={Class.MedicalCareBox}>
            <li><a href="">Medical Care</a></li>
            <a href="">< ArrowDropDownOutlinedIcon /></a>
          </div>
          <div className={Class.GroceriesBox}>
            <li><a href="">Groceries</a></li>
            <a href="">< ArrowDropDownOutlinedIcon /></a>
          </div>
          <div className={Class.BestSellersBox}>
            <li><a href="">Best Sellers</a></li>
          </div>
          <div className={Class.AmazonBasicsBox}>
            <li><a href="">Amazon Basics</a></li>
        
          </div>
          <div className={Class.PrimeBox}>
            <li><a href="">Prime</a></li>
            <a href="">< ArrowDropDownOutlinedIcon /></a>
          </div>
          <div className={Class.NewReleasesBox}>
            <li><a href="">New Releases</a></li>
           
          </div>
          <div className={Class.TodaysDealsBox}>
            <li><a href="">Today's Deals</a></li>
           
          </div>
          <div className={Class.CustomerServiceBox}>
            <li><a href="">Customer Service</a></li>
          </div>
          <div className={Class.MusicBox}>
            <li><a href="">Music</a></li>
          </div>
          <div className={Class.AmazonHomeBox}>
            <li><a href="">Amazon Home</a></li>
           
          </div>
          <div className={Class.RegistryBox}>
            <li><a href="">Registry</a></li>
          </div>
          <div className={Class.BooksBox}>
            <li><a href="">Books</a></li>
          
          </div>
          <div className={Class.PharmacyBox}>
            <li><a href="">Pharmacy</a></li>
          </div>
          <div className={Class.GiftCardsBox}>
            <li><a href="">Gift Cards</a></li>
            <a href="">< ArrowDropDownOutlinedIcon /></a>
          </div>
          <div className={Class.FashionBox}>
            <li><a href="">Fashion</a></li>
           
          </div>
          <div className={Class.SmartHome}>
            <li><a href="">Smart Home</a></li>
       
          </div>
        </section>
        <section className={Class.RightEndWrapperBox}>
        <div className={Class.JoinPrimeBox}>
            <li><a href="">Join Prime for big deals</a></li>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HeaderRow