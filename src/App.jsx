import React, { useState } from 'react'
import Card from './components/Card';
const App = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);
  const [details, setDetails] = useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    if(title===""||details===""){
      return;
    }
    copyTask.push({title,details});
    setTask(copyTask);

    setTitle("");
    setDetails("");
  }
  return (
    <div className='bg-[#111] h-full'>
      <div className='lg:flex'>
        <form onSubmit={(e)=>{
          submitHandler(e)}} action="" className='flex flex-col  rounded gap-4 lg:w-1/2  mt-10 mx-10'>
            <h1 className='text-white text-3xl font-bold '>Add Notes</h1>
          <input value={title} onChange={(e)=>{
            setTitle(e.target.value);
          }} className='border-white border-2 text-white  h-10 p-2' type="text" placeholder='Enter Notes Heading' />
          <textarea value={details} onChange={(e)=>{
            setDetails(e.target.value);
          }} className='border-white border-2 text-white  h-20 p-2' name="" id="" placeholder='Write Details'></textarea>
          <button className='bg-pink-400 py-3 active:scale-90 active:bg-gray-500 rounded-xl text-white text-xl'>Add Note</button>
        </form>
        <div className='lg:w-1/2 mt-8 lg:mt-0 flex flex-col   h-screen lg:border-l-2 lg:border-t-0 border-t-2 border-white'>
          <h1 className='text-white text-2xl mt-4 font-bold pl-10'>Recent Notes</h1>
          <div className='lg:flex-row flex flex-col lg:flex-wrap lg:overflow-auto  gap-3 p-5 items-center' id='card'>
            {task.map((elem,idx)=>{
              return <Card key={idx} idx={idx} task={elem} setTask={setTask} tasks={task}/>
            })}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App