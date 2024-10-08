import React from 'react'
import Image from 'next/image'
import HGroup from '../../features/home/components/hgroup'

const Now = () => {

  const data = [
    'https://www.locknlock.com/idn/image/story/now/oi/ps/cblealox/138556018yaxm.jpg',
    'https://www.locknlock.com/idn/image/story/now/cr/om/txljjnff/138555953jeja.jpg',
    'https://www.locknlock.com/idn/image/story/now/lc/vx/vgatfzqq/138555918bqkp.jpg',
    'https://www.locknlock.com/idn/image/story/now/nr/xr/ihsievbv/138555842gptn.jpg',
    'https://www.locknlock.com/idn/image/story/now/rj/xp/wthxaamj/138555810apfl.jpg',
    'https://www.locknlock.com/idn/image/story/now/ql/ad/wcdcyjnb/138555753wowx.jpg'
  ]

  return (
        <section id='now' className='grid grid-cols-1 px-5 md:x-14 py-14 lg:py-16 lg:px-16 gap-12'>
          <HGroup title='Now' />
          <section id='now-list' className='grid lg:grid-cols-3 grid-cols-2 gap-3 lg:gap-16 '>
            {
              data.map((item, index) => {
                return(
                  <section key={index} className='relative w-full h-full'>
                    <figure className='w-full h-full overflow-hidden'>
                      <Image 
                      loading='lazy'
                      src={item} 
                      alt=""
                      width={700}
                      height={700} 
                      className='hover:scale-110 object-cover transition-[0.5s] w-full'
                      />
                    </figure>
                    <div className='absolute  md:bottom-[19px]  md:right-[1.2vw] bottom-[2.5vw] right-[2vw]'>
                      <svg className="h-9 w-9 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                        <rect x="4" y="4" width="16" height="16" rx="4" />  
                        <circle cx="12" cy="12" r="3" />  
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                      </svg>
                    </div>
                  </section>
                )
              })
            }
          </section>
        </section>  
  )
}

export default Now
