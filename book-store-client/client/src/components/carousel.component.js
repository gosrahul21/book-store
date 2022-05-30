import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
function Carousel({images, slidesToShow}) {
  const items = [
    {
      id: 'item-1',
      renderItem: (
        <img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/70_inr.jpg" alt=""/>
      // <h1>hiee</h1>
      )
    },
    {
      id: 'item-2',
      renderItem: (
        <img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg" alt=""/>
      // <h1>fdfdfdfdfdsds</h1>
      )
    },
    {
      id: 'item-2',
      renderItem: (
        <img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg" alt=""/>
      // <h1>fdfdfdfdfdsds</h1>
      )
    },
    {
      id: 'item-2',
      renderItem: (
        <img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg" alt=""/>
      // <h1>fdfdfdfdfdsds</h1>
      )
    },
    {
      id: 'item-2',
      renderItem: (
        <img src="https://d2g9wbak88g7ch.cloudfront.net/bannerimages/73_inr.jpg" alt=""/>
      // <h1>fdfdfdfdfdsds</h1>
      )
    }
  ]
//   const { carouselFragment, slideToNextItem, slideToPrevItem, thumbsFragment } = useSpringCarousel({
//     withLoop: true, 
//     // freeScroll:true,
//     // slideType: 'fluid',
//     // enableFreeScrollDrag:true,
//     // enableThumbsWrapperScroll:true,
//     items
//   })
 const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow|1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

return (
    <div className="overflow-hidden ">
      <Slider className='' arrows={true} nextArrow={<h1 className='z-10 bg-red-400'>Next</h1>} {...settings}>
        {images.map((imgLink,id)=>(<div>
          <img className='object-contain' src={imgLink} alt="banner" key={id}/>
        </div>))}
      </Slider>
    </div>
  );
}

export default Carousel