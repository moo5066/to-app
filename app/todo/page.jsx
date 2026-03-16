import React from 'react'
import { HiQrCode } from 'react-icons/hi2'
import { FiCheckCircle } from "react-icons/fi";

const page = () => {
  return (

<div className='my-50 mx-30 lg:mx-60 lg:w-[50%]  min-h-100 border border-gray-100 shadow-lg lg:justify-center lg:items-center flex flex-col rounded-lg p-10'>
    <div>
<div className='flex flex-row space-x-3'>
<FiCheckCircle size={20} className="text-blue-400"/>
    <h1 className='text-xl '>My To-Do List</h1>
</div>
    </div>
</div>
  )
}

export default page
