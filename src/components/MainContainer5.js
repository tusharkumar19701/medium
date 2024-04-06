import React from 'react'

const MainContainer5 = () => {
  return (
    <div className='bg-green-200 w-full flex md:flex-row flex-col-reverse justify-between p-4'>
        <div className='lg:w-1/2 p-10'>
            <h2 className='lg:text-8xl text-5xl'>Take Medium with you.</h2>
            <p className='mt-11'>Download our app so you can read wherever you are</p>
            <img className=' cursor-pointer mt-6' src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" alt="" />
        </div>
        <div className='flex justify-center'>
            <img className='w-80 object-cover' src="https://images.unsplash.com/photo-1587573578335-9672da4d0292?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default MainContainer5;