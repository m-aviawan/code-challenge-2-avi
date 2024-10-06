import ViewMoreBtn from '@/app/components/viewMoreBtn'
import React from 'react'
import Image from 'next/image'

const ProductsMain = () => {

  const data = [
    {
      id: 'product-airtight-containers',
      firstH1: 'Add safety',
      secondH2: 'LocknLock airtight containers',
      paragraph: 'Lessen discomfort and add safety by understanding our lifestyle and getting inspiration from them.',
      imgUrl: 'https://www.locknlock.com/idn/image/sub/2021/06/25/46783496ckon.jpg'
    },
    {
      id: 'product-tumbler',
      firstH1: 'Add story',
      secondH2: 'LocknLock tumbler',
      paragraph: 'Create a design and a function with whatever that is in the tumbler to serve as the best match for every moment of my life.',
      imgUrl: 'https://www.locknlock.com/idn/image/sub/2023/03/20/101498138xanv.jpg'
    },
    {
      id: 'product-product-cookware',
      firstH1: 'Add comfort',
      secondH2: 'LocknLock cookware containers',
      paragraph: 'Relish in the joy of cooking from cooking to serving on the table with comfortable use and feel-good design.',
      imgUrl: 'https://www.locknlock.com/idn/image/sub/2021/06/25/46783559wgcl.jpg'
    },
    {
      id: 'product-small-appliances',
      firstH1: 'Add comfort',
      secondH2: 'LocknLock small apliances',
      paragraph: 'Enrich our daily lives by making our cooking experience more convenient and tasty and our daily lifestyle safer!',
      imgUrl: 'https://www.locknlock.com/idn/image/sub/2023/03/30/102361808rffh.jpg'
    },
  ]

  return (
    <section id='products-main'>
      {
        data.map((item, index) => {
          return(
            <section key={index} id={item.id} className='relative h-screen w-full'>
              <figure className='absolute w-full h-screen'>
                <Image 
                src={item.imgUrl} 
                width={1000}
                height={1000}
                alt="" 
                className='object-cover h-screen w-full'/>
              </figure>
              <section className='z-10 content lg:p-16 md:p-12 p-5 flex flex-col justify-center h-screen'>
                <h1 className='z-10 text-[32px] leading-[1.2em] md:text-5xl font-bold text-left md:mb-4'>{item.firstH1}</h1>
                <h1 className='z-10 text-[32px] leading-[1.2em] md:text-5xl font-bold text-left mb-5'>{item.secondH2}</h1>
                <p className='z-10 lg:w-[50%] w-[90%] text-left lg:text-lg mb-7'>{item.paragraph}</p>
                <ViewMoreBtn zIdx='z-10' bg='hover:bg-black' border='border border-black' text='text-black hover:text-white'/>
              </section>
            </section>
          )
        })
      }
    </section>
  )
}

export default ProductsMain
