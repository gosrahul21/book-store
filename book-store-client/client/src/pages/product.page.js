import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { getBookById } from '../resources/actions/constants/actions';

function Product() {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);
    console.log(bookId)
    useEffect(()=>{
        (async ()=>{

            const book = await getBookById(bookId);
            setBook(book);
        })()
    },[]);


  return ( book?
    <div className='px-20 '>
        <div className='flex space-x-4 py-10  border-b-2 border-gray-300'>
            {/* left */}
            <div>
                {/* image portion */}
                <img className='h-[450px] w-[320px] object-contain' src={book.pic}/>
            </div>
            {/* right */}
            <div className='flex flex-col justify-between '>
                <div>
                    {/* titile */}
                    <h1 className='text-3xl font-semibold text-gray-800'>{book?.title}</h1>
                    <h3 className='text-base font-semibold text-gray-600'>{book?.author}</h3>
                    {/* ratings */}
                    <Rating name="read-only" value={4} readOnly></Rating>
                </div>
                {/* price */}

                <div className=''>
                    <div className='flex flex-row space-x-4 items-center '>
                        <h3 className='text-2xl font-semibold text-rose-700'> &#8377;{book.price-(book.price*book.discount/100)}</h3> 
                        <h3><del> &#8377;{book.price}</del></h3>
                    </div>
                    <div className='space-x-4 flex'>
                    <button className='bg-yellow-700 px-10 py-4 text-gray-100 rounded-md shadow-sm transition duration-150 active:scale-95'>Buy</button>
                    <button className='bg-yellow-700 px-10 py-4 text-gray-100 rounded-md shadow-sm transition duration-150 active:scale-95'> Add to Cart </button>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className='py-4 text-gray-600'>
            {/* product description */}
            <h3 className='text-xl font-semibold text-gray-600'>About the Book</h3>
            <p>{book.description}</p>
        </div>
    </div>:null
  )
}

export default Product