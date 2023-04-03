import CardResult from '@/components/card/CardResult'
import MovieContent, { Movie } from '@/components/content/MovieContent'
import React from 'react'

type SearchProps = {
    searchTerm: string
}

type SearchPageProps = {
    params: SearchProps
}

export default async function SearchPage({params}: SearchPageProps) {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);

    if (!res.ok) throw new Error("Oops!!! : Error Fetching Data....");

    const data = await res.json();

    const results = data.results as Movie[]
  return (
    <div className=''>
        {
            results && results.length === 0 && (
                <h1 className='text-center py-16'>No results founded</h1>
            )
        }
        {
           results && <MovieContent results={results} />
        }
    </div>
  )
}
