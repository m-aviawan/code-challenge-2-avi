import React from 'react'
import Image from 'next/image'
import useTeamsHook from '@/features/teams/hooks/useTeamsHook'

const TeamsProfile = async() => {

    const {
        onFetchTeamsData,
        position,
        description
    } = useTeamsHook()

    const data = await onFetchTeamsData()
  return (
    <section className='grid px-5 md:px-12 lg:px-16 grid-cols-1 pb-5 md:pb-12 lg:pb-16 lg:grid-cols-2 xl:grid-cols-3 w-full gap-7 sm:gap-12 md:gap-16 lg:gap-24'>
        {data.map((item, index) => {
          return(
            <article key={index} className='flex flex-col p-2 lg:grid grid-cols-3 gap-2 col-span-1 border border-gray-300 bg-gray-100'>
              <section className='flex justify-between w-full col-span-3'>
                <figure className='md:flex hidden'>
                  <Image
                  loading='lazy'
                  src={item.picture.large}
                  width={1000}
                  height={1000}
                  alt=''
                  className='object-full lg:w-full w-[30vw]'
                  />
                </figure>
                <figure className='md:hidden'>
                  <Image
                  loading='lazy'
                  src={item.picture.large}
                  width={1000}
                  height={1000}
                  alt=''
                  className='object-full lg:w-full w-[30vw]'
                  />
                </figure>
                <article className='text-gray-800 lg:col-span-3 text-right'>
                  <h1 className='text-xl font-bold'>{position[index]}</h1>
                  <p className='text-md font-base'>{description[index]}</p>
                </article>
              </section>
              <section className='flex flex-col items-center justify-between w-full col-span-3 gap-2'>
                <h1 className='bg-blue-600 text-2xl font-semibold text-center text-white py-1 px-3 w-[113%]'>{item.name.first} {item.name.last}</h1>
                <address className='flex flex-col gap-1  w-full'>
                  <p className='text-sm font-semibold py-1 px-3 text-left w-full'><strong>{item.location.city}</strong>, {item.location.country}</p>
                  <p className='text-sm font-semibold py-1 px-3 text-left w-full'>{item.cell}</p>
                </address>
              </section>
            </article>
          )
        })}
      </section>
  )
}

export default TeamsProfile
