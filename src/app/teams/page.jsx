
import Image from 'next/image'
import React from 'react'

const onFetchTeamsData = async() => {
  try {
    let res = await fetch('https://randomuser.me/api/?results=6&gender=male', {
        cache: 'force-cache'
    }) 
    res = await res.json()
    console.log(res.results)
    return res.results
  } catch (error) {
    console.log(error)
  }  
}

const position = [
  'Global Director', 
  'Asia Director', 
  'North America Director', 
  'China Director', 
  'Head of Product', 
  'Head of RnD'
]

const Teams = async() => {
  const data = await onFetchTeamsData()
    return (
    <main className='w-full flex flex-col lg:gap-16 md:gap-12 gap-8'>
      <header className='relative flex px-5 md:px-12 lg:px-16 justify-center h-screen items-center text-white'>
        <figure className='absolute top-0 w-full h-screen'>
          <Image 
          src='https://www.locknlock.com/eng/image/common/innovation/labs/research-development.jpg'
          width={1500}
          height={1500}
          alt=''
          className='object-cover h-screen w-screen'
          />
        </figure>
        <h1 className='absolute w-full md:text-7xl text-4xl font-bold z-10 h-full bg-lin-1 flex items-center justify-center'>
          Our People
        </h1>
      </header>
      <section className='grid px-5 md:px-12 lg:px-16 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-24'>
        {data.map((item, index) => {
          return(
            <article key={index} className='p-2 grid grid-cols-3 gap-2 col-span-1 border border-gray-300 bg-gray-100'>
              <figure className='col-[3/4]'>
                <Image
                src={item.picture.large}
                width={1000}
                height={1000}
                alt=''
                className='object-full'
                />
              </figure>
              <article className='text-xl font-bold text-gray-800 col-span-3'>
                <p>{position[index]}</p>
              </article>
              <section className='flex flex-col items-center justify-between col-span-3 gap-2'>
                <h1 className='bg-blue-600 text-2xl font-semibold text-center text-white py-1 px-3 w-[113%]'>{item.name.first} {item.name.last}</h1>
                <p className='text-sm font-bold py-1 px-3 text-right w-full'><strong>Jakarta,</strong> Indonesia</p>
              </section>
            </article>
          )
        })}
      </section>
      <section className='px-5 md:px-12 lg:px-16 flex flex-col items-center justify-center font-bold gap-10 h-screen'>
        <h1 className='w-80% md:text-3xl text-2xl text-center'>
          And other 11.431 people that gives their dedication to our business
        </h1>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold flex justify-center'>Thank You!</h1>
      </section>
    </main>
  )
}

export default Teams
