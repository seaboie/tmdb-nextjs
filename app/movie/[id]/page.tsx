import { Movie } from '@/components/content/MovieContent';
import Image from 'next/image';
import React from 'react'
import { Interface } from 'readline';

interface MoviePageProps {
    params: Movie
}

async function getMovie(id: string) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    return await res.json();
}

export default async function MoviePage({params}: MoviePageProps) {

    const movie = await getMovie(params.id) as Movie;

    return (
        <div className='w-full py-40'>

            <div className='p-4 md:pt-8 flex flex-col md:flex-row place-items-center max-w-6xl mx-auto md:space-x-6'>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    width={500}
                    height={300}
                    alt='Image has downloaded'
                    style={{maxWidth: '100%', height: '100%'}}
                    blurDataURL='/spinner.svg'
                    placeholder='blur'
                    className='rounded-lg'
                />
                <div className="p-2">
                    <h2 className='text-2xl mb-3 font-bold'>{movie.title || movie.name}</h2>
                    <p className='mb-3'>
                        <span className='text-lg font-bold'>Overview : </span>{movie.overview}
                    </p>
                    <p>
                        <span className='text-base font-bold'>Date Released : </span><span className='text-sm'>{movie.release_date || movie.first_air_date}</span>
                    </p>
                    <p>
                        <span className='text-base font-bold'>Ratings : </span><span className='text-sm'>{movie.vote_count}</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}
