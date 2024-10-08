import React from 'react'

const HGroup = ({title}) => {
  return (
    <hgroup className='flex justify-between items-center'>
        <h1 className='md:text-7xl text-4xl font-bold'>{title}</h1>
        <div className='border border-black hover:bg-black hover:text-white hover:cursor-pointer transition-[0.5s]'>
            <div className='w-9 h-9 font-bold text-2xl flex justify-center items-center hover:rotate-45 transition-[0.5s]'>+</div>
        </div>
    </hgroup>
  )
}

export default HGroup
