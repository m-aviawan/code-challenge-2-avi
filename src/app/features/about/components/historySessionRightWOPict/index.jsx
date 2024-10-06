import React from 'react'

const HistorySessionRightWOPict = ({id, year, MonthAndDesc}) => {
  return (
        <article id={id}>
            <h1 className='text-[80px] lg:text-[155px] font-bold text-left lg:text-right leading-none mb-4'>{year}</h1>
            <div className='flex flex-col gap-6 w-full items-start lg:items-end'>
                {
                    MonthAndDesc.map((item, index) => {
                        return(
                            <div key={index} className='flex gap-6 justify-end'>
                                <strong className='text-[26px] flex items-start w-[50px] text-left lg:text-right '>{item.month}</strong><p className='flex items-center text-left lg:text-right text-xl sm:text-2xl'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </article>     
  )
}

export default HistorySessionRightWOPict