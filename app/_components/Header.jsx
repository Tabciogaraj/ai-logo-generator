"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { ChevronRight, LayoutDashboardIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Header() {
  const {user}=useUser();
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        <Link href="/"><Image src={'/logo.svg'} alt="logo" width={180} height={100}></Image></Link>
        <div className='flex gap-3 items-center'>
          {
          user?<Link href="/" className='flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:text-white hover:bg-secondary shadow-md'><LayoutDashboardIcon className='w-5'/> Dashboad </Link>:
          
        <Link href="/" className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary shadow-md'>Zacznij teraz <ChevronRight /></Link>}
        <UserButton />
        </div>
        </div>
  )
}

export default Header