import React from 'react'
import Image from 'next/image'
const MoviePage = async ({params}) => {
    var movieId = params.id
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie = await response.json()
    console.log(movie)

  return (
    <div className='w-full' >
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
            <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className='rounded-lg'
            style={{maxWidth: '100%', height: '100%'}}
            >

            </Image>
            <div>
                <h2 className='mb-4 font-extrabold' >{movie.title || movie.original_name}</h2>
                <p>{movie.overview}</p>
                <p className='mb-4' >{movie.release_date || movie.first_air_date}</p>
                <p className='mb-4' >{movie.vote_count}</p>
            </div>
        </div>
    </div>
  )
}

export default MoviePage