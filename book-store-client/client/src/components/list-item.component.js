import React,{useRef} from 'react'
import Card from './card.component'
import Slider from 'react-slick';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * items properties
 * card
 * link of image, price, off price %,  writer
 * @returns 
 */
function ListItems({ title, books}) {
    const customSlider = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
      };

    const getLeftArrow = ()=>{
        return (
            <button className='absolute top-[50%] left-5 bg-gray-300 cursor-pointer h-10 w-10' onClick={()=> customSlider.current.slickPrev()}>
                <ChevronLeftIcon/>
            </button>
        )
    }
    const getRightArrow = ()=>{
        return (
            <button className='absolute top-[50%] right-5 bg-gray-300 cursor-pointer  h-10 w-10' onClick={()=> customSlider.current.slickNext()}>
                <ChevronRightIcon/>
            </button>
        )
    }
  return (
      <div>
          <div className='flex justify-between py-4'>
            {/* title */}
            <h1 className='text-3xl'>{title || 'title'}</h1>
          {/* see all button */}
          <button className='px-4 py-2 bg-red-700 text-white active:scale-95 rounded-sm'>See All</button>
          </div>
          
          <div className='relative '>
            <Slider className='' {...settings} ref={(slider)=>customSlider.current=slider}>
                {
                    books.length?books.map((book)=><Card _id={book._id} title={book.title} author={book.author} price={book.price}
                        pic = {book.pic} discount={book.discount}
                    />):[]
                }
            </Slider>
            {getLeftArrow()}
            {getRightArrow()}
        </div>
    </div>
    
  )
}

export default ListItems