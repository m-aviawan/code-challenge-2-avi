import React from 'react'
import Image from 'next/image'

const GlobalNetworkBanner = () => {
  return (
    <section id='global-network-banner' className='relative h-[70vh] w-full'>
    <figure className='absolute h-[70vh] w-full'>
      <Image
      loading='lazy' 
      src="https://www.locknlock.com/idn/image/common/main/banner-lg.jpg" 
      width={1500}
      height={1500}
      alt="" 
      className='object-cover h-[70vh] w-full'/>
    </figure>
    <section className='h-[70vh] content px-5 md:px-12 lg:px-16 py-16 flex flex-col justify-center z-20 gap-7'>
      <h1 className='z-10 lg:text-2xl text-xl text-white font-bold text-left lg:w-[70%] w-[80%]'>
      We transform from Korea’s leading kitchen life and culture company
      into the global company admired by people from around the world.
      </h1>
      <button className='z-10 border hover:text-black hover:bg-white transition-[0.25s] text-white border-white py-3 px-6 text-lg w-fit'>View more</button>
    </section>
  </section>
  )
}

export default GlobalNetworkBanner
