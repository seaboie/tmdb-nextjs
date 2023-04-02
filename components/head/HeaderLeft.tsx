"use client"

import Link from 'next/link'
import React from 'react'

type HeaderLeftProps = {
    title: string,
    route: string,
    icon: React.ReactNode
}

export default function HeaderLeft({title, route, icon}: HeaderLeftProps) {
  return (
    <div>
        <Link href={route} className=' hover:text-amber-600 flex justify-start'>
            <div className='sm:hidden'>
                {icon}
            </div>
            <div className='hidden sm:inline-block text-lg self-start'>
                {title}
            </div>
        </Link>
    </div>
  )
}
