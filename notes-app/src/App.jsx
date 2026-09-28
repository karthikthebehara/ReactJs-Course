import React from "react";

const App = () => {


  const submitHandler =(e)=>{
    console.log("Form submited");
    e.preventDefault();
  }
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex justify-between items-start p-10 flex-col gap-4 " 
        onSubmit={(e)=>{
          submitHandler(e)
      }}>
    
          <input
            type="text"
            placeholder="Enter Hading"
            className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 h-32 py-2 border-2 rounded w-full outline-none font-medium"
          />
          <button className="bg-white text-black px-5 py-2 rounded w-full outline-none font-medium">
            Add Notes
          </button>


      </form>
    </div>
  );
};

export default App;
