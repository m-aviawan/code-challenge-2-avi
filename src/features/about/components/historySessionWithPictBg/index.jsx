import React from 'react'
import Image from 'next/image'

const HistorySessionWithPictBg = ({id, imgUrl, year, monthAndDesc}) => {
  return (
        <section id={id} className='relative w-full rounded-none text-black'>
            <figure className='md:flex hidden absolute h-screen w-full'>
              <Image
              loading='lazy' 
              src={imgUrl} 
              alt=""
              width={1500} 
              height={1500} 
              className='object-cover h-screen'/>
            </figure>
            <figure className='md:hidden absolute h-screen w-full'>
              <Image
              loading='lazy' 
              src={imgUrl} 
              alt=""
              width={1500} 
              height={1500} 
              className='object-cover h-screen'/>
            </figure>
            <article id='history-2009' className=' text-white flex flex-col justify-start p-5 md:p-12 lg:p-16 h-screen'>
              <h1 className='text-[80px] lg:text-[155px] font-bold text-left drop-shadow-sm'>{year}</h1>
              <div className='flex flex-col gap-6 w-fit'>
                {
                    monthAndDesc.map((item, index) => {
                        return(
                            <div key={index} className='flex items-center gap-6 z-10'>
                                <strong className='text-[26px] w-[50px] text-left drop-shadow-sm'>{item.month}</strong><p className='text-left text-2xl'>{item.desc}</p>
                            </div>
                        )
                    })
                }
              </div>
            </article>
          </section>
  )
}

export default HistorySessionWithPictBg
