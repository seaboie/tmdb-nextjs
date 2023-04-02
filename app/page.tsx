import { Inter } from 'next/font/google'
import MovieContent, { Movie } from '@/components/content/MovieContent'

const inter = Inter({ subsets: ['latin'] })

interface SearchParams {
  genre?: string;
  // add more properties if needed
}

const API_KEY = process.env.API_KEY 

export default async function Home({searchParams}: { searchParams: SearchParams }) {

  const genre = searchParams.genre || "fetchTrending"
  const res = fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`, {next: {revalidate: 10000}})

  const data = await (await res).json();
  const results = data.results as Movie[];

  console.log(results);
  

  if (!(await res).ok) return alert("Cannot fetch Data...")
  
  return (
    <div>
      <MovieContent results={results} />
    </div>
  )
}
