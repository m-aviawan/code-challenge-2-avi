'use client'

import React from 'react'
import { useState } from 'react'

const useHeroHook = () => {
    const heroSlider= [
        {
          title: 'Satisfaction',
          description: 'We seek customer satisfaction through product development that has eco-friendly materials and innovative design.',
          img: 'https://www.locknlock.com/idn/image/product/2023/03/29/102274892ttmz.jpg'
        },
        {
          title: 'Better Life',
          description: 'We aim for differentiated challenges and change and we endeavor to improve the life value of customers.',
          img: 'https://www.locknlock.com/idn/image/common/innovation/labs/open-innovation.jpg'
        },
        {
          title: 'Sharing',
          description: 'We realize business of sharing that the environment and humans can coexist in harmony and contribute to society.',
          img: 'https://www.locknlock.com/idn/image/common/innovation/design-center/design-business.jpg'
        }
    ]
    
    const [currSlide, setCurrSlide] = useState(0)
    const prev = () => {
        setCurrSlide(currSlide == 0 ? heroSlider.length - 1 : currSlide - 1)
    }
    
    const next = () => {
        setCurrSlide(currSlide == heroSlider.length - 1 ? 0 : currSlide + 1)
    }
  
    return {
        heroSlider,
        currSlide,
        prev,
        next
    }
}

export default useHeroHook
