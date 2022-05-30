import {useSpringCarousel} from 'react-spring-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from 'react-slick';
import {useRef} from 'react'


function Category() {
  const customRef = useRef();
   const items = [
    {
      id: 'item-3',
      renderItem: (
          <div className='flex flex-col items-center cursor-pointer'>
              <div className=''>
                <img className='' src="https://www.bookswagon.com/images/icon5.png" alt=""/>
              </div>
              
            <p className='text-center'>Fiction Books</p>
          </div>
        
      
      )
    },
    {
      id: 'item-5',
      renderItem: (
          <div className='flex flex-col items-center cursor-pointer'>
              <img className='  object-contain' src="https://www.bookswagon.com/images/icon8.png" alt=""/>
              <p className='text-center'>Award Winners</p>
          </div>
      )
    },
    {
      id: 'item-5',
      renderItem: (
          <div className='flex items-center justify-center cursor-pointer'>
              <img className='  contain' src="https://www.bookswagon.com/images/icon4.png" alt=""/>
                <p className='text-center'>Box Sets</p>
          </div>
      )
    },
    {
      id: 'item-1',
      renderItem: (
          <div className='flex flex-col items-center justify-center cursor-pointer'>
              <img className=' ' src="https://www.bookswagon.com/images/icon9.png" alt=""/>
                <p className='text-center'>Tarrot Cards</p>
          </div>
        )
    },
    {
      id: 'item-2',
      renderItem: (
          <div className='flex items-center justify-center cursor-pointer'>
              <img className='  contain' src="https://www.bookswagon.com/images/icon7.png" alt=""/>
              <p className='text-center'>International Best Seller</p>
          </div>
      )
    },
    {
      id: 'item-4',
      renderItem: (
          <div className='flex items-center justify-center cursor-pointer'>
              <img className='  contain' src="https://www.bookswagon.com/images/icon1.png" alt=""/>
                <p className='text-center'>Best Seller</p>
          </div>
        
      )
    },
    
    {
        id: 'item-4',
        renderItem: (
            <div className='flex items-center justify-center cursor-pointer '>
                <img className='  contain' src="https://www.bookswagon.com/images/icon2.png" alt=""/>
                  <p className='text-center'>New Arrival</p>
            </div>
          
        )
      },
  ]

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000, 
    lazyLoad:true,
    speed: 500,
    dots:false,
    slidesToShow:6,
    slidesToScroll: 1
    
  }

  const renderArrows = () => {
    return (
      <div className=" flex justify-between ">
        <button
          className="bg-red-700 shadow-md"
          onClick={() => customRef.current.slickPrev()}
        >
          <ChevronLeftIcon className=''/>
        </button>
        <button
          className="bg-red-700 shadow-md active:scale-105"
          onClick={() => customRef.current.slickNext()}
        >
         <ChevronRightIcon/>
        </button>
      </div>
    );
  };

  return (
    // <div className="py-8 px-20 overflow-x-hidden">
    //     <div className="border-y-2   relative border-gray-400 flex justify-evenly items-center">
    //         {/* display carousel in fluid form */}
    //         <span  onClick={slideToPrevItem} className='bg-red-700 cursor-pointer p-2 absolute z-50 left-10 top-[50%]'>
    //             <ChevronLeftIcon className='text-white text-xl font-bold'/>
    //         </span>
    //         {carouselFragment}

    //         <span  onClick={slideToNextItem} className='bg-red-700 cursor-pointer p-2 absolute z-50 right-10 top-[50%]'>
    //             <ChevronRightIcon className='text-white text-xl'/>
    //         </span>

    //         {thumbsFragment}
    //     </div>
    // </div>
    <div className="relative ">

     <div className="  border-y-2 p-4 border-gray-400  ">
        <Slider centerMode={true} arrows={false}  {...settings} ref={(slider)=> customRef.current = slider}
        >
                {items.map((item)=>item.renderItem)}
        </Slider>
        {renderArrows()}
    </div>
    
        
    </div>
  )
}



export default Category