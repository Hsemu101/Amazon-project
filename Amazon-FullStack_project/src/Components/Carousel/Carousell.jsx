import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Class from "../Carousel/Carousel.module.css"
import ImageOne from "./img/ImageOne.jpeg"
import ImageTwo from "./img/ImageTwo.jpeg"
import ImageThree from "./img/ImageThree.jpeg"
import ImageFour from "./img/ImageFour.jpeg"
import ImageFive from "./img/ImageFive.jpeg"
import ImageSix from "./img/ImageSix.jpeg"
import ImageSeven from "./img/ImageSeven.jpeg"
import ImageEight from "./img/ImageEight.jpeg"
import ImageNine from "./img/ImageNine.jpeg"
import ImageTen from "./img/ImageTen.jpeg"
import ImageEleven from "./img/ImageEleven.jpeg"
import ImageTwelve from "./img/ImageTwelve.jpeg"
import ImageThirteen from "./img/ImageThreteen.jpeg"

function Carousell() {
  const Thirteen = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine, ImageTen, ImageEleven, ImageTwelve, ImageThirteen];
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showArrows={false} 
        showStatus={false} 
        interval={3000}>

      {Thirteen.map((Selector, index)=>{
              return <img key={index} src={Selector} alt="" /> 
            }
            )}
            
      </Carousel>
      <div className={Class.fade}></div>

    </div>
  )
}

export default Carousell






