import Link from 'next/link';
import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

function Nav() {
  return (
    <nav className=' bg-zinc-100  w-full  flex justify-between items-center p-2  text-sm '>
        <div className=' flex gap-4 p-3 '>
          <Link className='hidden sm:block hover:underline' href="http://">Chi Siamo</Link>
          <Link className=' hidden sm:block hover:underline' href="http://">Google Store</Link> 
          <Link className='block sm:hidden hover:underline' href={"/"}>Immagini</Link> 
 
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex gap-3 text-[13px] '>
                <Link className=' hidden sm:block hover:underline' href={"/"}>Gmail</Link>
                <Link className=' hidden sm:block hover:underline' href={"/"}>Immagini</Link> 
            </div>
            <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full hover:bg-zinc-100 flex justify-center items-center'>
                    <CgMenuGridO size={25} className=' text-zinc-600 cursor-pointer' />
                </div>
                <Link className=' traking-[.25px] cursor-pointer align-middle box-border  text-[#fff] ml-[8px] border border-transparent bg-[#1a73e8] hover:bg-[#1b66c9] font-[500] text-[14px] leading-[16px] mr-[8px] px-[23px] py-[9px] text-center rounded-[4px]  '
                    href="http://">Accedi
                </Link>
            </div>
        </div>
      
      
    </nav>
  )
}

export default Nav
