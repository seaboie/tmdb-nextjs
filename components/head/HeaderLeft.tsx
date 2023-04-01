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
        <Link href={route} className='mx-4 lg:mx-6 hover:text-amber-600'>
            <div className='sm:hidden'>
                {icon}
            </div>
            <div className='hidden sm:inline-block text-lg'>
                {title}
            </div>
        </Link>
    </div>
  )
}
