import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({imgSrc, description, linkTo}) => {
  return (
    <div className='flex items-center justify-center w-28 m-6 lg:w-96 lg:m-20'>
        <Link to={linkTo} className='text-center bg-[] shadow-md shadow-amber-950 p-4'>
            <img src={imgSrc} alt='' className='mx-auto mb-4 h-20 lg:h-96'/>
            <p className='lg:text-4xl h-12 inline-block align-middle'>{description}</p>
        </Link>
    </div>
  )
}