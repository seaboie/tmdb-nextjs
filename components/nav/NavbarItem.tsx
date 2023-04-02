"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

type NavbarItemProps = {
    title: string,
    param: string
}

export default function NavbarItem({ title, param }: NavbarItemProps) {

    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    return (
        <div>
            <Link href={`/?genre=${param}`}>
                <div className={`mx-4 hover:text-amber-500 font-semibold p-2 ${genre  && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500' }`}>
                    {title}
                </div>
            </Link>
        </div>
    )
}
