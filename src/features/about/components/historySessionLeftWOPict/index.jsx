import React from 'react'

const HistorySessionLeftWOPict = ({id, year, MonthAndDesc}) => {
  return (
        <article id={id}>
            <h1 className='text-[80px] lg:text-[155px] font-bold text-left leading-none mb-4'>{year}</h1>
              <div className='flex flex-col gap-7'>
                {
                    MonthAndDesc.map((item, index) => {
                        return(
                            <div key={index} className='flex gap-6'>
                                <strong className='font-bold flex items-start text-[26px] w-[50px] text-left'>{item.month}</strong><p className='text-xl flex items-center text-left md:text-2xl'>{item.desc}</p>
                            </div>
                        )
                    })
                }
              </div>
            </article>        
  )
}

export default HistorySessionLeftWOPict
