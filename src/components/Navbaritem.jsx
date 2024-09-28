'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Navbaritem = ({title, param}) => {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

  return (
    <div>
        <Link className={`hover:text-white font-semibold
        ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-white rounded-lg' : ''}
        `} href={`/?genre=${param}`} >
            {title}
        </Link>
    </div>
  )
}

export default Navbaritem