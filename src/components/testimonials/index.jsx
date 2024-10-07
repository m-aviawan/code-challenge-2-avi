import React from 'react'
import HGroup from '../../features/home/components/hgroup'

const Testimonials = () => {

  const data = [
    {
      name: 'Siti',
      testimony: `"LocknLock merupakan produk yang awet serta aman bagi saya dan keluarga tercinta"`,
      city: 'Jakarta, Indonesia',
      date: '2024. 08. 22',
      color: 'bg-green-600'
    },
    {
      name: 'Fatimah',
      testimony: `"Saya menggunakan produk LocknLock untuk usaha saya karena kualitas yang sudah teruji"`,
      city: 'Surabaya, Indonesia',
      date: '2024. 07. 13',
      color: 'bg-amber-600'
    },
    {
      name: 'Aisyah',
      testimony: `"Saya sangat merekomendasikan keluarga dan teman dekat saya untuk menggunakan produk ini"`,
      city: 'Tangerang, Indonesia',
      date: '2024. 05. 19',
      color: 'bg-red-600'
    },
  ]

  return (
    <section id='testimonials' className='flex flex-col px-5 md:px-12 lg:px-16 py-16 gap-12 bg-gray-100'>
          <HGroup title='Testimonials'/>
          <div id='news-list' className='grid lg:grid-cols-3 grid-cols-1 xl:gap-16 gap-5'>
           {
            data.map((item, index) => {
              return(
              <article key={index} className='news-article flex flex-col gap-4'>
                <section className='relative z-20 flex flex-col pb-14 pt-16 px-7 justify-start gap-5 border border-gray-300 h-full'>
                  <h2 className='font-bold absolute top-0 left-0 p-3 bg-blue-700 text-white w-full'>LocknLock</h2>
                  <h1 className='text-2xl md:text-3xl font-bold text-center text-black'>{item.name}</h1>
                  <p className=' text-black text-center text-xl'>{item.testimony}</p>
                </section>
                <span className='flex items-center gap-3'>
                  <div className={`${item.color} text-white py-1 px-2 h-fit w-fit text-sm`}>{item.city}</div>
                  <svg className="h-4 w-4 text-black"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="currentColor"  
                    strokeWidth="2"  
                    strokeLinecap="round"  
                    strokeLinejoin="round">  
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                  <p className='text-gray-500 lg:text-left text-right'>{item.date}</p>
                </span>
              </article>
              )
            })
           }
          </div>
    </section> 
  )
}

export default Testimonials
