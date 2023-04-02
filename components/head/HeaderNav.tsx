import React from 'react'
import HeaderLeft from './HeaderLeft'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FcAbout } from 'react-icons/fc'
import Link from 'next/link'
import DarkModeSwitch from '../dark/DarkModeSwitch'

export default function HeaderNav() {
  return (
    <div className='flex  justify-around place-items-center py-3'>
        <div className='flex gap-8 text-xl justify-center'>
            <HeaderLeft title='HOME' route='/' icon={<AiFillHome />} />
            <HeaderLeft title='ABOUT' route='/about' icon={<FcAbout />} />
            <HeaderLeft title='CONTACT' route='/contact' icon={<BsFillInfoCircleFill />} />
        </div>
        <div className='text-2xl flex items-center space-x-5'>
            <DarkModeSwitch />
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
