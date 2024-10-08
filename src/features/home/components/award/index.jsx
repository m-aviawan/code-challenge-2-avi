import React from 'react'
import Image from 'next/image'
import ViewMoreBtn from '@/components/viewMoreBtn'

const Award = () => {
  return (
        <section id='award' className='relative h-screen md:max-h-[400px] max-h-[300px]'>
          <figure className='md:flex hidden absolute h-screen w-full md:max-h-[400px] max-h-[300px]'>
            <Image
            loading='lazy' 
            src="https://www.locknlock.com/idn/image/sub/2023/01/20/96395545lomt.jpg"
            width={1200}
            height={1200}
            alt="text"
            className='object-cover h-screen md:max-h-[400px] max-h-[300px] w-full' 
            />
          </figure>
          <figure className='md:hidden absolute h-screen w-full md:max-h-[400px] max-h-[300px]'>
            <Image
            loading='lazy' 
            src="https://www.locknlock.com/idn/image/sub/2023/01/20/96395545lomt.jpg"
            width={700}
            height={700}
            alt="text"
            className='object-cover h-screen md:max-h-[400px] max-h-[300px] w-full' 
            />
          </figure>
          <section className='content p-5 md:p-12 lg:p-16 flex flex-col justify-center z-20'>
            <h1 className='text-3xl font-bold text-left mb-5  text-white z-10'>2023 Korea First Brand Awards</h1>
            <p className='w-full sm:w-[50%] text-left text-lg mb-7 text-white z-10'>LocknLock won Korean First Brand 2023 in the kitchenware category</p>
            <ViewMoreBtn bg='hover:bg-white' text='text-white hover:text-black' border='border border-white' zIdx='z-10'/>
          </section>
        </section>
  )
}

export default Award
