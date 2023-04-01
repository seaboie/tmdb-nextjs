import React from 'react'
import HeaderLeft from './HeaderLeft'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function HeaderNav() {
  return (
    <div className='flex justify-between place-items-center sm:max-w-xl  md:max-w-3xl lg:max-w-4xl  xl:max-w-6xl
    2xl:max-w-7xl px-3 py-2 mx-auto bg-red-50'>
        <div className='flex gap-4 text-xl'>
            <HeaderLeft title='HOME' route='/' icon={<AiFillHome />} />
            <HeaderLeft title='CONTACT' route='/contact' icon={<BsFillInfoCircleFill />} />
        </div>
        <div className='text-2xl'>
            <Link href={"/"}>
                <div className='flex place-items-center gap-1'>
                    <span className='font-bold bg-amber-500 px-2 py-1 rounded-lg'>IMBd</span>
                    <span className='text-xl hidden sm:inline-block'>Clone</span>
                </div>
            </Link>
        </div>
    </div>
  )
}
