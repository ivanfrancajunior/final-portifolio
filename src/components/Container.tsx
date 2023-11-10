import React from 'react'

export const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <section className='flex flex-col  items-start justify-center w-full  p-8 '>{children}</section>
  )
}
