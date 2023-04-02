"use client"
import React, { useEffect } from 'react'

interface ErrorProps {
    error: string,
    reset(): void
}

export default function error({ error, reset }: ErrorProps) {

    useEffect(() => {

        console.log(error);

        return () => { }
    }, [error])


    return (
        <div className=' flex flex-col  bg-slate-400'>
            <div className=' flex-grow grid place-items-center gap-8 py-8'>
                <div className='text-6xl'>Something went wrong!!!!!</div>
                <button onClick={() => reset()}
                    className='py-3 px-8 bg-slate-900 rounded-full'
                >Try Again please.....</button>
            </div>
        </div>
    )
}
