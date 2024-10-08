import React from 'react'
import Image from 'next/image'

const HistoryBanner = () => {
  return (
    <section className="w-full relative rounded-none mt-8 mb-16 overflow-hidden">
    <figure className='my-14 hidden md:flex relative z-10 top-0 w-full '>
      <Image
        loading='lazy'
        src="https://www.locknlock.com/idn/image/common/about/history/scene-item-0.png"
        width={1000}
        height={1000}
        alt="" 
        className="object-contain z-10 white mx-auto w-[50%] lg:w-[35%]"
      />
    </figure>
    <figure className='my-14 md:hidden relative z-10 top-0 w-full '>
      <Image
        loading='lazy'
        src="https://www.locknlock.com/idn/image/common/about/history/scene-item-0.png"
        width={1000}
        height={1000}
        alt="" 
        className="object-contain z-10 white mx-auto w-[50%] lg:w-[35%]"
      />
    </figure>
    <h1 className='md:text-9xl text-[18vw] sm:text-8xl absolute top-[23vw] sm:top-[150px] font-bold text-gray-200 text-center w-full'>LocknLock</h1>
    <h1 className='md:text-9xl text-[18vw] sm:text-8xl absolute top-[43vw] sm:top-[250px] md:top-[300px] font-bold z-20 text-black text-center w-full'>Since 1978</h1>
    </section>
  )
}

export default HistoryBanner
