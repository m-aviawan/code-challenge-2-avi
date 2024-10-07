import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav id='navbar' className='fixed grid grid-cols-4 w-full border-b border-b-gray-300 py-3 pr-3 md:pr-2 lg:px-10 px-[3vw] bg-white z-50'>
      <article id='company-logo'>
        <h1 className='lg:text-xl md:text-2xl text-[30px] font-bold text-left'><Link href='/'>LocknLock</Link></h1>
        <p className='hidden lg:flex text-xs text-left'>Connects living with life, liveliness and love</p>
      </article>
      <ul id='navbar-links' className='hidden lg:flex justify-center items-center gap-10 font-semibold text-gray-700 text-lg col-span-2'>
        <li className='hover:text-black'><Link href='/'>Home</Link></li>
        <li className='hover:text-black'><Link href='/about'>About Us</Link></li>
        <li className='hover:text-black'><Link href='/products'>Products</Link></li>
        <li className='hover:text-black'><Link href='/teams'>Our Teams</Link></li>
      </ul>
      <section id='search' className='flex text-gray-700 hover:text-black hover:cursor-pointer justify-end items-center gap-2 col-[4/5]'>
      <svg className="sm:h-6 sm:w-6 h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      </section>
      <aside className="lg:hidden absolute w-full right-0 top-[3px] md:top-[-2.5px] collapse p-0 rounded-none">
        <input type="checkbox" name="my-accordion-1"/>
        <div className="collapse-title text-xl flex justify-end font-medium">
          <svg className="text-black lg:hidden sm:w-7 sm:h-7 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg> 
        </div>
        <div className="collapse-content bg-white p-0">
          <section className="lg:hidden join join-vertical w-full">
            <div className="collapse collapse-arrow join-item">
              <input type='checkbox' name="my-accordion-4"/>
              <div className="collapse-title px-5 md:px-12 text-base font-bold">About</div>
              <div className="collapse-content px-0">
                <ul className='bg-gray-100 flex flex-col text-left gap-3 text-sm text-gray-900'>
                  <li className='font-bold border-b border-gray-300 py-3 px-5 md:px-12' ><Link href='/about'>History</Link></li>
                  <li className='border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/about'>Company Culture</Link></li>
                  <li className='border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/about'>Our Teams</Link></li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item">
              <input type='checkbox' name="my-accordion-4"/>
              <div className="collapse-title px-5 md:px-12 text-base font-bold">Product</div>
              <div className="collapse-content px-0">
                <ul className='bg-gray-100 flex flex-col text-left gap-3 text-sm text-gray-900'>
                  <li className='font-bold border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/products'>Our Products</Link></li>
                  <li className='border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/products'>Now</Link></li>
                  <li className='border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/products'>Dowmload E-Catalog</Link></li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item">
              <input type='checkbox' name="my-accordion-4"/>
              <div className="collapse-title px-5 md:px-12 text-base font-bold">Teams</div>
              <div className="collapse-content px-0">
                <ul className='bg-gray-100 flex flex-col text-left gap-3 text-sm text-gray-900'>
                  <li className='font-bold border-b border-gray-300 py-3 px-5 md:px-12'><Link href='/teams'>Our People</Link></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar
