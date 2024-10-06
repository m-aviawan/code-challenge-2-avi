import React from 'react'

const ViewMoreBtn = ({zIdx, bg, border, text}) => {
  return (
    <button 
    className={`${zIdx} ${border} py-2 px-7 ${bg} ${text} transition-[0.25s] text-lg w-fit`}>
        View more
    </button>
  )
}

export default ViewMoreBtn
