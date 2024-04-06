import React from 'react'

const MainContainer6 = () => {
  return (
    <div className='w-full'>
        <div className='flex md:flex-row flex-col border border-black w-full'>
            <div className='border border-b-black md:border-b-white md:border-r-black w-full md:w-8/12 text-4xl md:text-8xl p-6'>Learn more about us.Or join us.</div>
            <div className='w-full'>
                <div className='border border-b-black w-full p-10 '>
                    <p className='text-3xl font-bold'>The Medium blog</p>
                    <p className='mt-2 w-5/12'>Visit our company blog for the latest news,product updates, ans tips and tricks.</p>
                    <div className='cursor-pointer w-[200px] mt-20 px-4 py-2 border border-green-600 rounded-full text-green-600 text-center text-lg md:text-xl hover:bg-green-600 hover:text-white '>Read our Blog</div>
                </div>
                <div className='w-full p-10 '>
                    <p className='text-3xl font-bold'>Work at Medium</p>
                    <p className='mt-2 w-5/12'>Our team is home to engineers,journalists,artists,and creatives of all stripes.</p>
                    <div className='cursor-pointer w-[200px] md:w-[300px] mt-20 px-4 py-2 border border-green-600 rounded-full text-green-600 text-center text-lg md:text-xl hover:bg-green-600 hover:text-white '>View our positions</div>
                </div>
            </div>
        </div>
        <div className='flex flex-row-reverse justify-between w-full border border-b-black'>
            <div className='p-10'>
                <p className='text-5xl md:text-8xl'>Read, write, and expand your world.</p>
                <p className='p-2 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ratione, blanditiis dolor at voluptas esse in nihil eum ea ullam dolorum. Atque iusto, in eligendi fugiat tempore asperiores soluta incidunt reiciendis qui. Delectus accusamus dolorem pariatur aperiam facilis totam amet quam reiciendis. Eius, a officia! Odio animi at eum. Dolorum.</p>
                <div className='cursor-pointer w-[200px] mt-20 px-4 py-2 border border-green-600 bg-green-600 rounded-full text-white text-center text-xl'>Get started</div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer6;