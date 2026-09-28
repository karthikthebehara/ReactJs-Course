import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    console.log("Form submited");
    e.preventDefault();

    const copyTask =[...task];
    copyTask.push({title, details});
    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("")
  }
  
  
  return (
    <div className="h-screen lg:flex bg-black text-white">
      
      <form className="flex  items-start p-10 flex-col gap-4 lg:w-1/2"
        onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h1 className="text-4xl">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Hading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
        />
        <textarea
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          className="px-5 h-32 py-2 border-2 rounded w-full outline-none font-medium"
        />
        <button className="bg-white text-black active:bg-gray-500 px-5 py-2 rounded w-full outline-none font-medium">
          Add Notes
        </button>
      </form>

      <div className="  p-10 bg-gray-900 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5  h-full overflow-auto">
        
          {task.map((el, idx)=>{
            return <div key ={idx} className="h-52 w-40 rounded-xl bg-white text-black p-4">
              <h3 className="">{el.title}</h3>
            </div>
          })}
     
        </div>
      </div>
    </div>
  );
};

export default App;
