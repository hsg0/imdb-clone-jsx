import React from 'react'
import Navbaritem from './Navbaritem'

const Navbar = () => {
  return (
    <div className='flex dark: bg-amber-600 p-5 lg:text-lg justify-center gap-5' >
        <Navbaritem title='Trending' param='fetchTrending' />
        <Navbaritem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar