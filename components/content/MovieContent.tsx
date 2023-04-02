import React from 'react'

export type Movie = {
    id: string,
    title: string,
    release_date: string,
    original_title: string,
    overview: string,
    poster_path: string,
    vote_average: string
}

export type MovieContentProps = {
    results: Movie[]
}

export default function MovieContent({results}: MovieContentProps) {
  return (
    <div>
        {
            results.map((result) => (
                <div key={result.id}>{result.original_title}</div>
            ))
        }
    </div>
  )
}
