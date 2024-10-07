import React from 'react'
import Image from 'next/image'

const BreakPicture = ({imgUrl, heightClassName}) => {
  return (
    <section className='w-full flex justify-center'>
        <Image
        loading='lazy' 
        src={imgUrl} 
        width={1500}
        height={1500}
        alt="" 
        className={`object-cover h-[80vh] min-h-[515px]`}
        />
    </section>
  )
}

export default BreakPicture
