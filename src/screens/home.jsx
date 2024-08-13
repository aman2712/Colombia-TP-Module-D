import React from 'react'
import Button from '../components/button'

const Home = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
      <img src='/images/logo-white.png' alt='Paris Olympics 2024 | Logo' className='mt-16' />
      <img src='/images/frame.png' alt='Paris Olympics 2024 | Logo' className='mt-20' />
      <Button imgsrc='/images/ico-countries.svg' text='Countries' path='/countries' className='mt-20 max-w-[70%]' />
      <Button imgsrc='/images/ico-disciplines.svg' text='Disciplines' path='/disciplines' className='mt-5 max-w-[70%]' />
    </section>
  )
}

export default Home
