import React from 'react'
import Slider from 'react-slick';
import Carousel from './carousel.component';


function FictionBooks() {
  return (
    <div className='px-20 py-5'>
        <div>
            <h1 className='text-2xl font-semibold'>Our Best Fictional Books</h1>
        </div>
        <div className='flex justify-center bg-red-100 box-border'>
            <img className='object-contain' src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/4_mangamania.jpg"/>
            <img className='object-contain' src="https://d2g9wbak88g7ch.cloudfront.net/promotionimages/5_preorders.jpg"/>
        </div>
        
    </div>
  )
}

export default FictionBooks