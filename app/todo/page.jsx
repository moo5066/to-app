import React from 'react'
import { HiQrCode } from 'react-icons/hi2'
import { LuSquareCheckBig } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";


const page = () => {
  return (

<div className='my-50 mx-30 lg:mx-60 lg:w-[50%]  min-h-100 border border-gray-100 shadow-lg lg:justify-center lg:items-center flex flex-col rounded-lg p-10'>
    <div className=''>
<div className='flex flex-col'>
<div className='flex flex-row   items-center space-x-3'>
  <LuSquareCheckBig size={30} className="text-blue-400"/>
    <h1 className='text-2xl  font-meduim'>My To-Do List</h1>
    </div>

    <p className='text-gray-400'>3 tasks remaining</p>
    </div>

<hr className='w-full mt-5 text-gray-300'/>

</div>

<div className='mt-17'>
  <div className='flex justify-between items-center'>
    <div className='bg-gray-200 w-[80%] p-1 rounded-sm'>
      <p className='text-gray-500'>Add a new task...</p>
    </div>
    <div className='flex space-x-3 items-center bg-black text-white p-0.5 px-2 rounded-lg'>
      <FaPlus size={15}/>
      <p className='text-lg font-medium'>Add</p>
    </div>
  </div>

  <hr className='mt-15 text-gray-300'/>
</div>

</div>
  )
}

export default page
