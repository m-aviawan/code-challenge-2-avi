import React from 'react'
import Image from 'next/image'

const AllCatalogDownloadBanner = () => {
  return (
    <section id='catalog-download' className='flex relative md:h-[60vh] md:min-h-fit h-screen'>
      <figure className='absolute h-full w-full'>
        <Image
        loading='lazy' 
        src="https://www.locknlock.com/idn/image/common/product/catalog/catalog-hero-lg.jpg" 
        alt="" 
        width={1500}
        height={1500}
        className='h-full w-full object-cover'/>
      </figure>
      <section className='py-16 lg:px-16 md:px-14 px-5 flex flex-col md:justify-start justify-center'>
        <h1 className='z-10 leading-tight md:text-[70px] text-[38px] font-bold text-left mb-2 text-black'>E-Catalog</h1>
        <p className='z-10 text-left text-base md:text-lg mb-7 text-black'>All Catalog Download</p>
        <button className='z-10 border border-black box-border transition-[0.25s] hover:text-black hover:bg-white text-white bg-black py-3 px-6 text-lg w-fit flex justify-center items-center gap-2'>
          DOWNLOAD
          <svg className="h-4 w-4 text-inherit"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />  <polyline points="7 10 12 15 17 10" />  
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
      </section>
    </section>
  )
}

export default AllCatalogDownloadBanner
