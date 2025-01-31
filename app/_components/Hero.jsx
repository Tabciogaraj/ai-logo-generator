"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'

import Link from 'next/link';


function Hero() {
  const [logoTitle,setLogoTitle]=useState();
  return (
    <div className='flex items-center mt-24 flex-col gap-4'>
         <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-2 mb-7 text-sm text-blue-700 bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-md rounded-full">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3 font-bold uppercase">ZA DARMO</span> <span className="text-sm font-medium text-white">To narzędzie jest darmowe!</span> 
            <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>
        <h2 className='bg-gradient-to-r from-amber-300 to-pink-600 bg-clip-text text-transparent text-5xl text-center font-bold p-2 drop-shadow-sm'>{Lookup.HeroHeading}</h2>
        <h2 className='text-4xl text-center text-bold tracking-tight first:mt-0 border-b '>{Lookup.HeroSubheading}</h2>
        <p className='scroll-m-20 text-lg font-extralight tracking-tight text-gray-500'>{Lookup.HeroDesc}</p>

        <div className='flex gap-6 w-full max-w-2xl mt-10'>
            <input placeholder={Lookup.InputTitlePlaceholder} 
            className='p-3 border rounded-md w-full shadow-md'
              onChange={(event)=>setLogoTitle(event?.target.value)}
            />

              <Link className='bg-primary p-3 rounded-lg shadow-md text-white hover:bg-pink-600' href={'/create?title='+logoTitle}>Rozpocznij</Link>
            
            
        </div>

    </div>
  )
}

export default Hero