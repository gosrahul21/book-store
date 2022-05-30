import React from 'react'
import Carousel from './carousel.component'

function Banner() {
  
  const bannerImages = [
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/70_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg",
    "https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg"
]
  return (
    <div>
        {/* banner image */}
        <div>
            <img src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/1_alltimefavourite.jpg" alt=''/>
        </div>
        
        {/* carousel banner image */}

        <Carousel images={bannerImages}/>
    </div>
  )
}

export default Banner