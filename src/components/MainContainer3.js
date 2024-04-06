import React from 'react'

const MainContainer3 = () => {
  return (
    <div className='bg-gray-900 text-white w-full'>
        <div className='flex md:flex-row flex-col border border-b-white'>
            <div className='min-w-1/2 md:text-8xl text-4xl border border-r-white p-10'>Over 100 million readers and growing.</div>
            <div className='min-w-1/2 p-20'>
              <div className='flex'>
                <img src="https://miro.medium.com/v2/resize:fill:176:176/1*sfhp3E_INI3PBFC8hzmKgw.jpeg" className='rounded-full' alt="" />
                <div className='ml-4 md:block hidden bg-blue-500 w-[10rem] h-[11rem] rounded-full'></div>
                <div className='ml-4 md:block hidden bg-pink-500 w-[5rem] h-[11rem] rounded-full'></div>
              </div>
                <p className='mt-4 text-xl'>"Medium is a great place to read and learn from a wide range of authors. It's not mudied up by ads.It feels like one of the few pure places to go online."</p>
                <p className='mt-4 text-xl'>Jackie Colburn</p>
            </div>
        </div>
        <div className='pb-10'>
          <h2 className='text-center mt-8 text-4xl md:text-8xl w-8/12 m-auto'>Create the space for your thinking to take off.</h2>
          <div className='px-20 mt-4'>
            <p className='text-center md:w-1/2 w-full m-auto text-lg text-gray-200'>A blank page is a door. At Medium you can walk through it.It's easy and fresh to share your thinking in any topic, connect with an audience, express yourself with a range of publishing tools, and even earn money for your work.</p>
          </div>

          <div className='mt-10 w-full'>
            <div className='cursor-pointer m-auto w-[200px] px-4 py-2 border border-green-600 rounded-full text-green-600 text-center text-xl hover:bg-green-600 hover:text-white '>Write on Medium</div>
          </div>
        </div>
    </div>
  )
}

export default MainContainer3