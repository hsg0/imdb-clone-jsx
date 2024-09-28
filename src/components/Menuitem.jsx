import Link from 'next/link'
import React from 'react'

const Menuitem = ( { title, address, Icon } ) => {
  return (
    <Link href={address}> 
        <Icon className='text-2xl sm:hidden hover:text-amber-500' />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default Menuitem