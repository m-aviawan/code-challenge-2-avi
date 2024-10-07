import React from 'react'
import FooterAccordion from '../footerAccordion'

const Footer = () => {
  return (
    <footer id='main-footer' className='relative flex flex-col lg:grid grid-cols-3 px-5 md:px-12 lg:px-16 pt-16 gap-8 lg:gap-16 border-t border-t-gray-300'>
          <section className='lg:col-[1/2] lg:row-[1/3] text-left flex lg:flex-col lg:gap-4 justify-between lg:justify-start'>
            <h1 className='text-3xl font-bold'>LocknLock</h1>
            <address className='hidden text-[13px] text-gray-600 lg:flex flex-col gap-[2.5px]'>
              <div>LocknLock Co. , 20F, Grand Central A</div>
              <div>Sejong-daero 14, Jung-gu, Seoul, 04527,</div>
              <div>Republic of Korea , RD: YI Young Sang,</div>
              <div>Business registration number : 214-85-34765</div>
            </address>
            <div className='lg:hidden bg-black text-white w-9 h-9 font-bold text-2xl flex justify-center items-center'>
              <svg className="h-5 w-5 font-bold text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <line x1="12" y1="5" x2="12" y2="19" />  
                <line x1="18" y1="11" x2="12" y2="5" />  
                <line x1="6" y1="11" x2="12" y2="5" />
              </svg>
            </div>
            <address className='lg:flex gap-4 mt-3 hidden'>
              <article>
                <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <rect x="4" y="4" width="16" height="16" rx="4" />  
                  <circle cx="12" cy="12" r="3" />  
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </article>
              <article>
                <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </article>
              <article>
                <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </article>
              <article>
                <svg className="h-7 w-7 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </article>
            </address>
          </section>
          <FooterAccordion />
          <address className='flex gap-4 mt-3 lg:hidden'>
            <article>
              <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <rect x="4" y="4" width="16" height="16" rx="4" />  
                <circle cx="12" cy="12" r="3" />  
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </article>
            <article>
              <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </article>
            <article>
              <svg className="h-7 w-7 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </article>
            <article>
              <svg className="h-7 w-7 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </article>
          </address>
          <section className='col-[2/4] row-[1/3] hidden lg:flex gap-2 justify-between'>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>About</h1></li>
              <li>Brand</li>
              <li>History</li>
              <li>Award</li>
              <li>Business Information</li>
              <li>Social Responsibilities</li>
            </ul>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>Product</h1></li>
              <li>Food Container</li>
              <li>Beverageware</li>
              <li>Cookware</li>
              <li>Small Appliance</li>
              <li>E-Catalog</li>
            </ul>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>Innovation</h1></li>
              <li>LL Labs</li>
              <li>Design Center</li>
            </ul>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>Story</h1></li>
              <li>News</li>
              <li>Lounge</li>
              <li>Now</li>
            </ul>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>ESG</h1></li>
              <li>Environment</li>
              <li>Social</li>
              <li>Governance</li>
            </ul>
            <ul className='flex flex-col text-left gap-2 text-base text-gray-700'>
              <li><h1 className='font-semibold mb-4 text-gray-800'>Career</h1></li>
              <li>Company Culture</li>
              <li>Recruit</li>
            </ul>
          </section>
          <section className='lg:col-[1/4] lg:row-[3/4] text-gray-600 flex items-end h-full'>
            <div className="text-sm leading-7 w-[80%]">
              <ul className='flex flex-wrap gap-2'>
                <li className='hover:cursor-pointer hover:text-gray-800'>Global Network |</li>
                <li className='hover:cursor-pointer hover:text-gray-800'>Inquiry |</li>
                <li className='hover:cursor-pointer text-gray-950'><strong>Cookies Policy</strong> |</li>
                <li className='hover:cursor-pointer hover:text-gray-800'>Sitemap |</li>
                <li className='hover:cursor-pointer hover:text-gray-800'>Ethical Management</li>
              </ul>
            </div>
          </section>
          <article className='lg:col-[3/4] lg:row-[3/4] flex lg:mb-0 mb-3 items-center lg:justify-end h-full'>
          <p className='text-sm text-gray-600'>
          © 2024 LocknLock Co. All Rights Reserved
          </p>
          </article>
        </footer>
  )
}

export default Footer
