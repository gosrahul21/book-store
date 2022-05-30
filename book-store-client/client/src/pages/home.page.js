import React, { useEffect, useState } from 'react'
import Header from '../components/header.component'
import Banner from '../components/banner.component'
import Category from '../components/category.component'
import FictionBooks from '../components/fiction-books.component'
import ListItems from '../components/list-item.component'
import PopUp from '../components/popup.component'
import { getBooks, getNewArrivalBook, getMaxPercentageBook, getMinPercentageBook } from '../resources/actions/constants/actions'
import {useSelector} from 'react-redux';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect( ()=>{
(    async () => {
      try {
        getNewArrivalBook();
        getMaxPercentageBook(45);
        getMinPercentageBook(40);
        
      } catch (error) {
       
      }
    })()
  },[])
  const {books:{newArrival, upTo45, min40Off }} = useSelector((state)=>state);
  return (
    <div> 
        <Banner/>
        <section className='px-20 space-y-4'>
            <Category/>
            <FictionBooks/>
            {newArrival?.length && <ListItems books={newArrival} title={"New Arrival"}/>}
            {min40Off?.length && <ListItems books={min40Off} title={"Minimum 40% Discount and Above"}/>}
            {upTo45?.length && <ListItems books={upTo45} title ={"Upto 45% Discount"}/>}
        </section>
        {/* <PopUp/> */}
    </div>
  )
}

export default HomePage