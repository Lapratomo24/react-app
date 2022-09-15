import React from 'react'
import Movie from './Movie'

function RenderingLists() {
  const movieList = [
    'top gun',
    'mission impossible',
    'collateral'
  ]

  const movies = [
    {
      title: 'top gun',
      actor: 'tom cruise',
      year: 2022
    },
    {
      title: 'mission impossible',
      actor: 'tom cruise',
      year: 2023
    },
    {
      title: 'collateral',
      actor: 'tom cruise',
      year: 2004
    }
  ]

  return (
    <div>
      {movieList.map(movie => {
        return <h2 key={movie}>{movie}</h2>
      })}
      <hr />
      {
        movies.map(movie => {
          return (
            <div key={movie.title}>
              <h5>{movie.title}</h5>
              <p>{movie.actor}</p>
              <p>{movie.year}</p>
            </div>
          )
        })
      }
      <hr />
      {
        movies.map(movie => {
          return <Movie key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}

export default RenderingLists