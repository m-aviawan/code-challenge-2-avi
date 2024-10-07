import React from 'react'
import Image from 'next/image'

const CompanyCulture = () => {

  const data = [
    {
      id: 'culture-1',
      h1: '1st',
      paragraph: 'Respect each other no matter grade / gender / background / nationality.'
    },
    {
      id: 'culture-2',
      h1: '2nd',
      paragraph: 'Share the same goals even though we have different roles.'
    },
    {
      id: 'culture-3',
      h1: '3rd',
      paragraph: 'Think about ways to find solutions rather than say ‘this doesn’t work.’'
    },
    {
      id: 'culture-4',
      h1: '4th',
      paragraph: 'Respect ‘differences’ rather than say ‘it’s wrong.’'
    },
    {
      id: 'culture-5',
      h1: '5th',
      paragraph: 'Freely share thoughts and listen with an open mind.'
    },
  ]

  return (
    <section>
      <section id="company-culture-head" className='relative h-screen'>
          <figure className='absolute h-screen w-full'>
            <Image
            loading='lazy' 
            src="https://www.locknlock.com/idn/image/common/innovation/labs/labs-hero-lg.jpg" 
            alt=""
            width={1500}
            height={1500}
            className='object-cover h-screen w-full' />
          </figure>
          <section className='p-16 flex flex-col justify-center gap-7 my-bg-lin-1 h-screen w-full'>
            <div>
              <p className='z-10 text-xl font-bold text-center text-white drop-shadow-sm'>For the benefit of</p>
              <p className='z-10 text-xl font-bold text-center text-white drop-shadow-sm'>consumers around the world</p>
            </div>
            <figure className='w-full flex items-center justify-center py-8 z-10'>
              <Image
              loading='lazy' 
              src="https://www.locknlock.com/idn/image/common/career/culture/culture-main-title-eng.svg" 
              alt=""
              width={1500} 
              height={1500} 
              className='sm:w-[50%] w-[100vw]'
              />
            </figure>
          </section>
        </section>
        <section id="company-culture-body" className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-16 py-16 px-5 md:px-12 lg:px-16 bg-gray-100'>
          {
            data.map((item, index) => {
              return(
                <article key={index} id={item.id}>
                  <h1 className='text-blue-700 font-bold text-[32px] lg:text-[40px] text-left mb-3 lg:mb-5'>{item.h1}</h1>
                  <p className='lg:text-lg text-left text-gray-900'>{item.paragraph}</p>
                </article>
              )
            })
          }
        </section>
        <section id="company-culture-foot" className='grid lg:grid-cols-2 grid-cols-1 py-16 px-5 md:px-12 lg:px-16'>
          <article className='relative h-fit'>
            <h1 className='text-[50px] font-bold text-left relative left-0 lg:absolute lg:top-[-4px] mb-8'>People at Heart</h1>
          </article>
          <article className='lg:pl-3'>
            <h1 className='text-left text-2xl lg:text-3xl font-bold mb-8'>We drive innovation with products and services that create a better world.</h1>
            <p className='text-left lg:text-lg'>
              Everyday, we ask questions and observe. How can we make this world a better place?
               At LocknLock, even the smallest ideas are shared and evolved into amazing ideas. We 
                drive changes in our daily lives and imagine ourselves creating a better lifestyle 
               for everyone. This is what moves us to lead innovation.
            </p>
          </article>
        </section>
    </section>
  )
}

export default CompanyCulture
