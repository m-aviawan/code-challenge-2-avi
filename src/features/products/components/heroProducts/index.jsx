import React from 'react'
import Image from 'next/image'

const HeroProducts = () => {
  return (
    <header id='products-banner' className='relative h-screen w-full'>
      <figure className='absolute h-screen w-full'>
        <Image
        loading='lazy' 
        src="https://www.locknlock.com/idn/image/product/2021/06/24/46699318dwdc.jpg" 
        alt="" 
        width={1500}
        height={1500}
        className='object-cover h-full w-full'/>
      </figure>
      <section className='h-full py-16 lg:px-16 md:px-14 px-5 flex flex-col justify-center z-20'>
        <h1 className='md:text-[70px] text-[35px] drop-shadow-sm font-bold text-left mb-5 text-white'>Our Products</h1>
      </section>
    </header>
  )
}

export default HeroProducts
