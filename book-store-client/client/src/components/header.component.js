import React from 'react'
import {useSelector} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from '../resources/firebase'
import Dropdown from './Dropdown.component';
import {toast} from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {logout} from '../resources/actions/constants/actions';
import Badge from '@mui/material/Badge';

function Header() {

    const {user} = useSelector(state=>state);
    const history = useNavigate();
    
 const signIn = async ()=>{
     try {
        const firebaseResult = await signInWithPopup(auth,provider);
        console.log(firebaseResult.user);
     } catch (error) {
         console.log(error)
     }
 }

 const items = user?[
    <div  className="w-60 text-center cursor-pointer mt-2 mb-2 text-sm hover:bg-gray-100 px-2 py-2 whitespace-nowrap ">
        Account Setting
    </div>,
    <div  className="w-60 text-center cursor-pointer mt-2 mb-2 text-sm hover:bg-gray-100 px-2 py-2 whitespace-nowrap ">
        Your Orders
    </div>,
    <div onClick={logout} className="w-60 text-center cursor-pointer mt-2 mb-2 text-sm hover:bg-gray-100 px-2 py-2 whitespace-nowrap ">
        Logout
    </div>
]:[    <div onClick={signIn} className="w-60 text-center cursor-pointer mt-2 mb-2 text-sm hover:bg-gray-100 px-2 py-2 whitespace-nowrap ">
            Sign In
        </div>
    ];
 
 return (
    <div className="px-4 py-4 sticky z-50 bg-white top-0 flex items-center shadow-sm ">
        {/* left portion of header */}
        <div className="space-x-10 flex flex-1 items-center flex-row">
            <div className='cursor-pointer' onClick={()=>history('')}>
                <img alt="" src ="https://www.bookswagon.com/images/logos/logo-new.png"/>
            </div>

            {/* input box */}
            <div className=" border-2  rounded-md flex w-[450px] h-10  items-center shadow-sm ">
                <input className="border-red-600 px-2 py-2 outline-none flex-1 h-full " placeholder="Search by Title, Author, Publilsher or ISBN" />
            {/* search icon */}
                <span className='h-full flex cursor-pointer items-center justify-center bg-red-800 p-2 rounded-r-md'>
                    <SearchIcon className="text-lg text-white"/>
                </span>
                
            </div>
        </div>


        {/* right portion of header */}
        <div className='flex items-center space-x-10 '>
            {/* login & other info box */}
            <Dropdown items={items}>
                <div  className='flex items-center shadow-lg  cursor-pointer' >
                    <p className='px-4 whitespace-nowrap'>{`Hello ${user?user.name:"user"}!`}</p>
                    <div className='avatar h-full p-2 bg-red-600 rounded-r-md'>
                        <PersonIcon/>
                    </div>
                </div>
            </Dropdown>

            <span>
                <Badge badgeContent={2}  color="error">
                    <FavoriteBorderIcon className='cursor-pointer text-lg'/>
                </Badge>
            </span>

            <span>
                <Link to="/cart">
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartIcon className='cursor-pointer text-lg'/>
                    </Badge>
                    
                </Link>
                
            </span>
        </div>
        


    </div>
  )
}

export default Header