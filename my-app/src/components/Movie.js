import React from 'react'

function Movie(props) {
    const movie = props.movie
  return (
    <div>
        <h5>{movie.title}</h5>
        <p>{movie.actor}</p>
        <p>{movie.year}</p>
    </div>
  )
}

export default Movie