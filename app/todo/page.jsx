'use client'

import { useState } from 'react'

import { LuSquareCheckBig } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";



const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");


  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (

<div className='my-50 mx-30 lg:mx-60 lg:w-[50%]  min-h-100 border border-gray-100 shadow-lg lg:justify-center lg:items-center flex flex-col rounded-lg p-10'>
    <div className=''>
<div className='flex flex-col'>
<div className='flex flex-row   items-center space-x-3'>
  <LuSquareCheckBig size={30} className="text-blue-400"/>
    <h1 className='text-2xl  font-medium'>My To-Do List</h1>
    </div>

    <p className='text-gray-400'>{tasks.filter(task => !task.completed).length} tasks remaining</p>
    </div>

<hr className='w-full mt-5 text-gray-300'/>

</div>

<div className='mt-17'>
  <div className='flex justify-between items-center'>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className='bg-gray-200 w-[80%] p-1 rounded-sm outline-none'
      placeholder="Add a new task..."
    />
    <button onClick={addTask} className={`flex space-x-3 items-center bg-black text-white p-0.5 px-2 rounded-lg ${input.trim() ? "" : "bg-gray-300 border border-gray-200 px-5 py-3"}`}>
      <FaPlus size={15}/>
      <p className='text-lg font-medium'>Add</p>
    </button>
  </div>

  <hr className='mt-15 text-gray-300'/>
</div>

{tasks.length === 0 ? (
  <p className='text-gray-500 mt-5'>No tasks yet. Add one to get started!</p>
) : (
  tasks.map(task => (
    <div key={task.id} className='flex items-center justify-between mt-3'>
      <div className='flex items-center space-x-3'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <p className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.text}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className='text-red-500'><MdDeleteForever size={20} className="hover:text-red-600"/></button>
    </div>
  ))
)}

</div>
  )
}

export default Page
