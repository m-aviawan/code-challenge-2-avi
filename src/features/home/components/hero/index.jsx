'use client'

import React from 'react'
import useHeroHook from '../../hooks/useHeroHook'
import Image from 'next/image'
import { useEffect } from 'react'

const Hero = () => {

  const { 
    heroSlider,
    currSlide,
    next,
    prev 
  } = useHeroHook()  
  
  useEffect(() => {
    setTimeout(next,5000)
  })

  return (
        <section id='hero-section-carousel' className='w-full h-screen overflow-hidden relative'>
          <div className='flex transition-transform ease-out duration-500 w-fit' style={{transform: `translateX(-${currSlide/heroSlider.length * 100}%)`}}>
              {
                heroSlider.map((item, index) => {
                  return(
                    <section key={index} id={`carousel-${index + 1}`} className="relative rounded-none max-h-[100vh] w-screen my-bg-lin-1">
                      <figure className='absolute bottom-0 w-screen -z-10'>
                        <Image
                          loading='lazy'
                          src={item.img}
                          width={1500}
                          height={1500}
                          alt={`pict-${index + 1}`} 
                          className="object-cover h-screen w-screen"
                        />
                      </figure>
                      <article className='z-10 p-12 lg:p-16 flex flex-col justify-center h-screen items-center gap-5'>
                        <h1 className='lg:text-6xl text-3xl font-bold text-left text-white drop-shadow-sm w-full'>{item.title}</h1>
                        <p className='lg:text-lg text-base lg:font-bold text-white text-left w-full drop-shadow-sm'>{item.description}</p>
                      </article>
                    </section>
                  )
                })
              }
          </div>
          <div id='carousel-buttons' className='absolute inset-0 flex items-center justify-between z-20 p-1'>
              <div onClick={prev}>
                <svg className="lg:h-8 lg:w-8 md:w-5 md:h-5 w-9 h-9 transition-[0.25s] hover:text-gray-700 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </div>
              <div onClick={next}>
                <svg className="lg:h-8 lg:w-8 md:w-5 md:h-5 w-9 h-9 transition-[0.25s] hover:text-gray-700 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
          </div>
        </section>
  )
}

export default Hero
