import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'

import * as Styled from './style'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    console.log(topRatedUrl)
    getTopRatedMovies(topRatedUrl)
  }, [])

  console.log(topMovies)

  return (
    <Styled.Container>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </Styled.Container>
  )
}

export default Home
