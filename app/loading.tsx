import Image from 'next/image'
import React from 'react'

export default function loading() {
    return (

        <div className='grid place-items-center py-44'>
            <Image
                src={'spinner.svg'}
                alt='Loading...'
                width={100}
                height={100}
                className=''
            />
        </div>

    )
}
