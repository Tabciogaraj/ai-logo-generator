import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Header() {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        <Link href="/"><Image src={'/logo.svg'} alt="logo" width={180} height={100}></Image></Link>
        <Button className=' shadow-md'>Zacznij teraz <ChevronRight /></Button>
    </div>
  )
}

export default Header