import React,{useState} from 'react'
import GoogleIcon from '@mui/icons-material/Google';
function PopUp() {
  const [show,setShow] = useState(true);
  return (
    (<div onClick={()=>{setShow(false); console.log(show)}} className={`parent fixed top-0 left-0 right-0 bottom-0 ${show?"flex":"hidden" } justify-center items-center`}>

        <div onClick={(e)=>{
          e.stopPropagation()
        }} className='child bg-slate-800 shadow-md rounded-md h-[300px] w-[300px] flex items-center justify-center'>
                <div className="active:scale-95 text-sm text-gray-50 px-4 py-2 rounded-md shadow-md bg-green-500  cursor-pointer"> Sign Up with Google <GoogleIcon/> </div>
        </div>
    </div>)
  )
}

export default PopUp;