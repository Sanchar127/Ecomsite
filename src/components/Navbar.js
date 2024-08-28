import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div className='bg-rose-200 p-5 mt-0' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <h3 className='logo flex justify-center items-center ' >
        <img 
          className="w-18 md:w-15 lg:w-30 h-12 rounded-xl border-2" 
          src="./YOYO.png" 
          alt="Logo"
        />
        </h3>
        <div class="flex justify-center items-center">
            <Link className='navLink  ' to='/'><h4 className='bg-blue-500 rounded-lg border-2  p-1 px-2 hover:bg-yellow-500 hover:border-gray-400'>Home</h4></Link>
            <Link className='navLink  ' to='/about'><h4 className='bg-yellow-400 rounded-lg border-2  p-1 px-2 hover:bg-blue-500 hover:border-gray-400 '>about</h4></Link>
            <Link className='navLink'  to='/Cart'><FaCartShopping /></Link>
            <div className='cartCount '>Cart items:<span className='bg-gray-500 px-1 ml-1 rounded-md  '> {items.length}</span></div>
        </div>
    </div>
  )
}

export default Navbar