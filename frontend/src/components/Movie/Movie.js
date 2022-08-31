import React from "react"

const Movie = ({ movie }) => {
  return (
    <>
      <div className="card">
        <img src={movie.posterUrl} alt="img" />
        <div className="card_details">
          <p>{movie.title}</p>
          <div className="tag">
            <div className="year">{movie.year}</div>
            <div className="genres">
              {movie.genres.map((genre, index) => (
                <div className="genre">{genre}</div>
              ))}
            </div>
          </div>
          <h3>{movie.plot}</h3>
        </div>
      </div>
    </>
  )
}

export default Movie
