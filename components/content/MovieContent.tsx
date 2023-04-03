import React from 'react'
import CardResult from '../card/CardResult'

export type Movie = {
    id: string,
    title: string,
    release_date: string,
    original_title: string,
    overview: string,
    poster_path: string,
    vote_average: string,
    backdrop_path: string,
    name: string,
    first_air_date: string,
    vote_count: string
}

export type MovieContentProps = {
    results: Movie[]
}

export default function MovieContent({results}: MovieContentProps) {
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  max-w-6xl py-5 px-5 mx-auto'>
        {
            results.map((result) => (
                <CardResult key={result.id} result={result} />
            ))
        }
    </div>
  )
}
