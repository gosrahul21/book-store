import React from 'react'
import {useNavigate} from 'react-router-dom'
function Card({_id, title, author, price,pic, discount }) {
  const navigate = useNavigate();

  const onClickHandler = ()=>{
    navigate(`/product/${_id}`);
  }
  return (
    <div onClick={onClickHandler} className='relative p-4 border-2 shadow-md rounded-md transition duration-200  hover:scale-105 flex flex-col space-y-1 items-center cursor-pointer'>
        {/* image */}
        <img className='h-40 w-36 object-contain' src = {pic} />
        <p className='text-lg font-semibold mt-2 whitespace-normal'>
            {/* book name */}
            {title.substring(0, 25)}
        </p>
        <p className='text-blue-700'>
            {/* author name */}
            {author}
        </p>
        <p className='text-sm text-gray-700 font-semibold'>
            {/* price */}
            &#x20B9;{price-(price*discount)/100} <del>{price}</del>
        </p>

        {discount && <div className='absolute top-0 right-0 p-1 rounded-[50%] bg-red-700 text-gray-100 font-semibold shadow-md'>
          -{discount}%
        </div>}
        <div className='flex justify-center space-x-2'>
          <button className='bg-red-700 px-4 py-1 text-center text-gray-100 rounded-md shadow-sm flex justify-center items-center transition duration-200 active:scale-95'>
            Buy
          </button>
          <button className='bg-yellow-700 px-4 py-1 text-center text-gray-100 rounded-md shadow-sm flex justify-center items-center transition duration-200 active:scale-95'>
            Add to cart
          </button>
        </div>
    </div>
  )
}

export default Card