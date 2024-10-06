import React from 'react'

const HistorySessionHOC = ({children, id}) => {
  return (
    <section id='id' className='px-5 pb-11 md:px-12 lg:px-16 text-black flex flex-col gap-20 mb-8'>
      {children}
    </section>
  )
}

export default HistorySessionHOC
