import React from 'react'
import { MdDelete } from "react-icons/md";
const Card = ({task,idx,tasks,setTask}) => {
    const deleteNote=(idx)=>{
        const copyTask=[...tasks];
        copyTask.splice(idx,1);
        setTask(copyTask);
    }
  return (
    <div className='bg-[url(https://tse2.mm.bing.net/th/id/OIP.ekNC1D27wZr84H-zsxl4vwHaHa?pid=Api&h=220&P=0)] object-cover bg-center bg-[length:138%]  rounded-xl p-4  h-50 w-50 flex flex-col'>
        <h1 className='p-2 text-xl font-bold'>{task.title}</h1>
        <p className='p-2 leading-tight text-sm'>{task.details}</p>
        <MdDelete onClick={()=>{deleteNote(idx)}} className='text-3xl mt-auto active:scale-150 self-center'/>
    </div>
  )
}

export default Card