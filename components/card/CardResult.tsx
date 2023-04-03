import React from 'react'
import { Movie } from '../content/MovieContent'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

interface CardResultProps {
    result: Movie
}

export default function CardResult({ result }: CardResultProps) {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-600 sm:m-2 transition-shadow duration-200 group'>
            <Link key={result.id} href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500}
                    height={300}
                    alt=''
                    className='sm:rounded-t-lg group-hover:opacity-60 transition-opacity duration-700'
                    blurDataURL='/spinner-small.svg'
                    placeholder='blur'
                    style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className='p-2'>
                    <p className='text-xs line-clamp-2'>{result.overview}</p>
                    <p className='text-lg truncate font-semibold'>{result.title || result.name}</p>
                    <div className='grid grid-cols-3'>
                        <p className='text-xs'>{result.release_date || result.first_air_date}</p>
                        <div className='grid justify-end'>
                            <FiThumbsUp />
                        </div>
                        <p className='text-xs grid justify-center'>{result.vote_count.toString()}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
