'use client'
import React, { useEffect, useState } from 'react'
import { MdTrendingUp } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import { Context } from './Nav';
import { words } from '../data';


function SearchBar() {
    const context = useGlobalContext()
    const {isClick,setIsClick} : Context = context
    const lens = <svg focusable="false" fill='#999999' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>

    const [value,setValue] = useState('')
    const [predicition,setPredicition] = useState <React.ReactNode>()
    const isEmpty = value == '' ? 'hidden' : '' ;
    const [randomWords,setRandomWords] = useState<React.ReactNode>()

    const selected = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setValue(e.currentTarget.textContent!)
        setPredicition('')
    }

    const WordsCap = words.map((word)=>{
       const capitalize = word.charAt(0).toUpperCase() + word.slice(1)
      return capitalize
    })
    
    const predictionFun = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
        if(e.target.value === '') return []
        const valueCpitalize = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        const wordsUp = WordsCap.filter(word=> word.startsWith(e.target.value))
        const wordsLow = words.filter(word=> word.startsWith(e.target.value))
        const  matchWords = e.target.value === valueCpitalize ? wordsUp : wordsLow ;

        setPredicition( matchWords.map((word,indx) =>(
            <li key={indx} className=' list-none hover:bg-slate-100 p-2 flex gap-2 items-center' onClick={(e)=>selected(e)}>
               <div className='w-4'>{lens}</div> {word}
            </li>
        )))
    }


    const randomwords = () => {
        const shuffle = (arr:string[]) => {
            return arr.sort(()=>Math.random() - 0.5)
        }
        const newArr = shuffle(words).slice(0,9)  
         setRandomWords(newArr.map((word,indx) =>(
            <li className='list-none hover:bg-slate-100 p-2 flex gap-2 items-center' key={indx} onClick={(e)=>selected(e)}><MdTrendingUp size={30}/> {word} </li>
         )))
             
    }

    useEffect(()=>{
        randomwords()
    },[])
   


  return (
    <div className='  flex justify-center flex-shrink-0   box-border w-full max-h-[160px] p-5 bg-white'>
        <form action="" className='w-full'>
        <div className=' my-0 mb-6 mx-auto w-auto max-w-[584px] pt-[6px] relative '>
            <div className={`${isClick== true? 'flex-col':'flex-row'} hover:shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex  z-[10] relative min-h-[44px] border border-[#dfe1e5;] shadow-none rounded-3xl my-0 w-auto  max-w-[584px]`}>  
                <div className='  flex  items-center  flex-1 pt-[5px] pr-[8px] p-[5px]  pl-[14px] '>
                    <div className='w-5'>
                        {lens}
                    </div>
                    <div className='flex flex-wrap flex-1 mt-2'>
                         <input onClick={()=>(setIsClick(true))}
                                onChange={(e)=>predictionFun(e)}
                                value={value}
                                type="area" 
                                className=' w-full  mb-2 overflow-x-hidden resize-none  bg-white border-none m-0 p-0 text-black break-words outline-none flex leading-[22px]' />
                     </div>
                    <div className='flex  gap-2 h-auto w-auto items-center'>
                       <div className=" cursor-pointer ">
                         <svg className=" h-6 w-6 align-middle z" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                       </div>
                    <div className=" cursor-pointer">
                        <svg className="h-6 w-6 align-middle" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>
                    </div>  
                    </div>
                </div>
                <div  className={` ${isClick == true ? 'flex':'hidden'} bg-white rounded-3xl  mt-2 w-full min-h-36 flex-col justify-center p-2 pl-5 gap-2 `}>
                <div className='w-full border-b border-zinc-200 bg-white '/> 
                    <h2 className=' w-full font-semibold'>Ricerche di Tendenza</h2>
                        <div className={` ${isEmpty}`}>{predicition}</div>
                        
                    <div className='bg-white ' onClick={()=>setIsClick(false)}>
                        { randomWords   }
                    </div>
               </div>
            </div>

           

        </div> 
        <div className='hidden  z-0 text-sm w-full p-2 h-[5rem] sm:flex gap-5 justify-center items-center '>
            <button className='bg-zinc-100 p-2 hover:bg-zinc-200 hover:border border-zinc-300'>Cerca con Google</button>
            <button className='bg-zinc-100 p-2 hover:bg-zinc-200 hover:border border-zinc-300'>Mi Sento fortunato</button>
        </div>
            
        </form>
        
    
      
    </div>
  )
}

export default SearchBar
