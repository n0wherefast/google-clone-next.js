import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
        <div className=' sm:mb-2 w-full min-h-[11.5rem] md:min-h-[8rem] bg-zinc-100 flex flex-col items-center '>
            <div className='w-full p-3'>
                <p className=' text-md'>
                    Italia
                </p>
                <div className='w-full p-1 border-b border-zinc-200'/>
            </div>
                <div className='xl:hidden pb-8'>
                    <Link className=' hover:underline' href="/"> Il nostro terzo decennio di azione per il clima </Link>
                </div>
            <div className=' p-2 flex flex-col md:flex-row w-full h-auto text-xs sm:text-sm items-center justify-between'>
                
                <div className='flex w-full justify-center gap-10'>
                    <Link className=' hover:underline' href="/">Publicità</Link>
                    <Link className=' hover:underline' href="/">Soluzioni Aziendali</Link>
                    <Link className=' hover:underline' href="*">Come funziona la Ricerca</Link>
                </div>

                <div className=' hidden xl:flex w-1/2'>
                    <Link className=' hover:underline' href=""> Il nostro terzo decennio di azione per il clima </Link>
                </div>

                <div className='flex w-full justify-center gap-10'>
                    <Link className=' hover:underline' href="/">Privacy</Link>
                    <Link className=' hover:underline' href="/">Termini</Link>
                    <Link className=' hover:underline' href="/">Impostazioni</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
