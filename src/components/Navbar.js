import React from 'react'
import {Link}  from 'react-router-dom';
import log from '../Images/log.svg'

export const Navbar = () => {
  return (
    <div className='flex justify-between h-20 '>
        <div> 
         <Link to='/'> <img className='w-40 mt-8  ml-10' src={log} alt="" /></Link>
        </div>
        <div>
          <ul className='flex font-semibold space-x-6 mt-8 cursor-pointer  '>
          <button className='hover:shadow-lg hover:bg-gray-200 py-2 px-3 rounded-3xl '><span>Discover</span></button>
          <button className='hover:shadow-lg hover:bg-gray-200 py-2 px-3 rounded-3xl '><span>Trips</span></button>
          <button className='hover:shadow-lg hover:bg-gray-200 py-2 px-3 rounded-3xl '><span>Review</span></button>
           <button className='hover:shadow-lg hover:bg-gray-200 py-2 px-5 rounded-3xl '><span>More</span></button>
          </ul>
        </div>

        <div>
            <div>
               
            </div>
            <div className='flex justify-center mr-9'>
                <button className='bg-zinc-950 hover:bg-slate-800 text-white  font-bold mt-8 rounded-3xl py-2 px-4'>
                    Sign in
                </button>
            </div>
        </div>
    </div>
  )
}
;
