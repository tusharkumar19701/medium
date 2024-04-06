import React from 'react';
import {details} from "../utils/constants";

const Table = () => {
  return (
    <div className='flex mt-6 flex-wrap items-center mb-10'>
        {details.map((detail) => (
            <div className='sm:px-20 sm:w-[400px] py-3 m-auto flex justify-between items-center border border-[rgb(247,211,187)] border-b-gray-500 '>
                <img className='w-11 rounded-full object-cover' src={detail.url} alt="" />
                <p className='pl-8 w-[200px] text-lg md:text-2xl text-left'>{detail.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Table