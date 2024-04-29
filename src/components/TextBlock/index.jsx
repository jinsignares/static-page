import React from 'react'
import Typography from '../Typography/Typography'

const TextBlock = ({children}) => {
  return (
    <section className='w-full pt-20 px-5 md:px-15 2xl:mb-12 mb-6 flex md:pt-23 flex-col 2xl:px-0 2xl:items-end 2xl:justify-end'>
        {children}
    </section>
  )
}

export default TextBlock