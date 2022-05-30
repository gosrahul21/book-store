import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
function Cart() {


    const getTotal = () => {
      // return cart.reduce((currentValue, nextValue) => {
      //   return currentValue + nextValue.count * nextValue.price;
      // }, 0);
    };
  
    const saveOrderToDb = () => {
      // console.log("cart", JSON.stringify(cart, null, 4));
      // userCart(cart, user.token)
      //   .then((res) => {
      //     console.log("CART POST RES", res);
      //     if (res.data.ok) history.push("/checkout");
      //   })
      //   .catch((err) => console.log("cart save err", err));
    };
  
    const saveCashOrderToDb = () => {
      // console.log("cart", JSON.stringify(cart, null, 4));
      // dispatch({
      //   type: "COD",
      //   payload: true,
      // });
      // userCart(cart, user.token)
      //   .then((res) => {
      //     console.log("CART POST RES", res);
      //     if (res.data.ok) history.push("/checkout");
      //   })
      //   .catch((err) => console.log("cart save err", err));
    };
  
    const showCartItems = () => (
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Color</th>
            <th scope="col">Count</th>
            <th scope="col">Shipping</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
  
        {/* {cart.map((p) => (
          <ProductCardInCheckout key={p._id} p={p} />
        ))} */}
      </table>
    );

    const item = (<div className='flex  flex-1 rounded-md shadow-sm px-4 py-4 bg-gray-200 '>
    <div>
        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/980/9788172234980.jpg" alt=''/>
    </div>

    <div className='p-4 flex  items-center justify-between w-full'>
        <div className='p-4'>
            <h2 className='text-2xl font-semibold text-gray-800'>Think & Grow Rich</h2>
            <div className='flex items-center space-x-2'>
                <h3 className='text-2xl font-semibold text-gray-800'>&#x20B9; 250</h3> 
                <p className="" ><del className='text-sm '>&#x20B9;350</del></p>
            </div>
        </div>

        <div>
            <div className='flex items-center   pr-4 space-x-2'>
                <h2>Quanity:</h2>
                <div className='flex flex-col '>
                    <ArrowDropUpIcon className='cursor-pointer hover:text-blue-600 ' onClick={()=>{}}/>
                    <ArrowDropDownIcon onClick={()=>{}} className='cursor-pointer hover:text-blue-600 hover:scale-105 '/>
                </div>
                <div className="text-sm text-indigo-600 bg-white shadow-sm rounded-sm p-2 ">{4}</div>
                <DeleteIcon onClick={()=>{}} className='text-red-500 cursor-pointer'/>
            </div>
        </div>
    </div>   
</div>)
  
    return (
      <div className='py-10 px-20 '>
          {/* left */}
          <div className='flex justify-between '>
            {/* list items */}
            <div className='space-y-4'>
                {item}
                {item}
                {item}
                {item}
            </div>



            {/* right */}
            <div className='relative'>
                <div className=' sticky top-20 rounded-md shadow-sm p-10 bg-gray-200 '>
                {/* Price (x items) */}
                    <div>
                        <h2 className='text-2xl font-semibold '>Price </h2>
                    </div>

                    <div>
                        {/* Discount */}
                        <h2 className='text-2xl font-semibold '>Discount</h2>
                    </div>

                    <div>
                        {/* Total Amount */}
                        <h2 className='text-2xl font-semibold '>Total Amount</h2>
                    </div>

                    <div>
                        {/* place order button */}
                        <button className='bg-orange-800 px-4 py-2 rounded-md shadow-md text-slate-100'> Place Order</button>
                    </div>
                </div>
            </div>
        </div>
            
          


      </div>
    );
}

export default Cart;