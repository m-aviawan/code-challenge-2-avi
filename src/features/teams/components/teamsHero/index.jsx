import React from 'react'
import Image from 'next/image'

const TeamsHero = () => {
  return (
    <header className='relative flex px-5 md:px-12 lg:px-16 justify-center h-screen items-center text-white'>
        <figure className='hidden md:flex absolute top-0 w-full h-screen'>
          <Image 
          loading='lazy'
          src='https://www.locknlock.com/eng/image/common/innovation/labs/research-development.jpg'
          width={1500}
          height={1500}
          alt=''
          className='object-cover h-screen w-screen'
          />
        </figure>
        <figure className='md:hidden absolute top-0 w-full h-screen'>
          <Image 
          loading='lazy'
          src='https://www.locknlock.com/eng/image/common/innovation/labs/research-development.jpg'
          width={700}
          height={700}
          alt=''
          className='object-cover h-screen w-screen'
          />
        </figure>
        <h1 className='absolute w-full md:text-7xl text-4xl font-bold z-10 h-full bg-lin-1 flex items-center justify-center'>
          Our People
        </h1>
      </header>
  )
}

export default TeamsHero
