import React from 'react'

const MainContainer4 = () => {
  return (
    <div className='flex flex-col w-full justify-between items-center bg-green-600'>
        <div className='w-7/12 p-10'>
            <h2 className='text-center text-4xl md:text-8xl'>Get more with membership.</h2>
            <p className='md:w-10/12 w-full m-auto text-center text-lg mt-6'>Become a Medium member to enjoy unlimited access and directly support the writers you read most.</p>
        </div>
        <div className='cursor-pointer m-auto mt-4 w-[300px] px-4 py-2 border border-white rounded-full text-white text-center text-xl hover:bg-green-600 hover:text-white '>See membership options</div>

        <div className='flex lg:flex-row flex-col border border-b-white mt-10 w-full'>
            <div className='lg:w-1/2 w-full text-4xl border border-green-600 border-b-white lg:border-r-white p-10 pt-40'>
                <p>Read as much as you want.</p>
                <p className='text-lg mt-10 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut totam? Repudiandae, dicta veniam. In impedit odit corporis sunt alias? Atque, ex adipisci? Minima aut debitis ab sed soluta eveniet, voluptatibus minus impedit consequuntur excepturi eum deleniti mollitia esse voluptas aliquid repudiandae quasi placeat earum aspernatur, blanditiis odio expedita cupiditate.</p>
                <p className='text-lg mt-10 text-gray-900'>Enjoy unlimited access to every store across all of your devices.</p>
            </div>
            <div className='md:w-1/2 md:p-20 mt-10'>
                <div className='w-full text-4xl p-10'>
                    <p>Reward quality content.</p>
                    <p className='text-lg mt-10 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut totam? Repudiandae, dicta veniam. In impedit odit corporis sunt alias? Atque, ex adipisci? Minima aut debitis ab sed soluta eveniet, voluptatibus minus impedit consequuntur excepturi eum deleniti mollitia esse voluptas aliquid repudiandae quasi placeat earum aspernatur, blanditiis odio expedita cupiditate.</p>
                    <p className='text-lg mt-10 text-gray-900'>Your membership helps us pay writers,and keeps your experience ad-free.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer4;