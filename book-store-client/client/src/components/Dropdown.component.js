import {useState,useEffect, Children} from 'react';

function Dropdown({items,children}) {
    const [show,setShow] = useState(false);
    useEffect(()=>{
        const close = ()=>{
            setShow(false);
        }
        window.addEventListener('click',close);

        return ()=>{
            window.removeEventListener('click',close);
        }
    },[])
    
    return (
        <div className="relative">
            <div  onClick={(e)=>{setShow(!show); e.stopPropagation();}}>
                {children}
            </div>
            {show&&<div className="absolute top-14 bg-white text-gray-700 rounded-xl z-[100]  right-0 shadow-md transition duration-500 ease-in">
                {items.map((item)=>item)}
            </div>}
        </div>
        
    )
}

export default Dropdown