import React from 'react'
import Table from './Table';

const MainContainer2 = () => {
  return (
    <div className='flex flex-col w-full justify-between items-center bg-[rgb(247,211,187)]'>
        <div className='md:w-7/12 w-full p-10'>
            <h2 className='text-center md:text-8xl text-4xl'>A living network of curious minds.</h2>
            <p className='md:max-w-1/12 mt-4 w-full text-center'>Medium is an engaging platform connecting curious minds through diverse perspectives. Explore profound insights, spark revelations, and cultivate intellectual growth within this vibrant community of eloquent storytellers and thought-provoking narratives.</p>
        </div>
        <Table />
    </div>
  )
}

export default MainContainer2;