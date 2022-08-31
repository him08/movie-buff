import React, { useEffect, useState } from "react"
import axios from "axios"
import Movie from "../../components/Movie/Movie"

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    axios
      .get(`/api/movies?q=${params.q}`)
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="banner">
      <div className="movies_container">
        {movies.length > 0 &&
          movies.map((m, index) => <Movie movie={m} key={index} />)}
      </div>
    </div>
  )
}

export default Movies
