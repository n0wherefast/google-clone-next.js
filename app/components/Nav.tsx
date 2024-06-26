'use client'
import Link from 'next/link';
import React,{useState} from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { useGlobalContext } from '../context/context';
import Image from 'next/image';
import { Interface } from 'readline';
import { auth } from '../firebase/Firebase';
 

interface Auth {
    email? : string ,
    name ?: string ,
    photoProfile? : string  ;
}

export interface Context {
   authData ?: {},
   signInWithGoogle? : any,
   isClick ? : boolean
   setIsClick ? : any ,
}


function Nav() {
    
    const Data = useGlobalContext()
    const {signInWithGoogle ,authData } :Context = Data
    const { photoProfile } : Auth  = authData!
    const [active,setActive] = useState(true)
     
  return (
    <nav className='   w-full  flex justify-between items-center p-2  text-sm '>
        <div className=' flex gap-4 p-3 '>
          <Link className='hidden sm:block hover:underline' href="/">Chi Siamo</Link>
          <Link className=' hidden sm:block hover:underline' href="/">Google Store</Link> 
          <Link onClick={()=>setActive(true)} className={`block sm:hidden hover:sm:underline  ${ active == true ?'underline' :''} decoration-solid decoration-2  decoration-blue-500  `} href="/">Tutti</Link> 
          <Link onClick={()=>setActive(false)} className={`${active==false? 'underline':''} decoration-solid decoration-2  decoration-blue-500  block sm:hidden hover:underline`} href="/">Immagini</Link> 
 
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex gap-3 text-[13px] '>
                <Link className=' hidden sm:block hover:underline' href="/">Gmail</Link>
                <Link className=' hidden sm:block hover:underline' href="/">Immagini</Link> 
            </div>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 rounded-full hover:bg-zinc-100 flex justify-center items-center'>
                    <CgMenuGridO size={25} className=' text-zinc-600 cursor-pointer' />
                </div>
                { photoProfile  ? <Image priority className=' rounded-full' src={photoProfile} width={35} height={35} alt='photo ptofile'/> :
                <button onClick={()=>signInWithGoogle()} className=' traking-[.25px] cursor-pointer align-middle box-border  text-[#fff] ml-[8px] border border-transparent bg-[#1a73e8] hover:bg-[#1b66c9] font-[500] text-[14px] leading-[16px] mr-[8px] px-[23px] py-[9px] text-center rounded-[4px]  '
                    >Accedi
                </button>
                }
            </div>
        </div>
    </nav>
  )
}

export default Nav
