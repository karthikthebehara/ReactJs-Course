import React, { useState } from "react";
import "tailwindcss";

const App = () => {
  const [a, change] = useState(0);

  const increment = () => {
    change(a + 1);
  };
  const decrement = () => {
    change(a - 1);
  };

  const [num, setNum] = useState({user:"Karthik", age:20});
  const counter = () => {
    const newNum ={...num};
    newNum.user ="Bhavani";
    setNum(newNum);

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-10">
      {/* <div
        id="parent"
        className="w-full max-w-lg flex flex-col gap-6 items-center justify-center p-5 m-5 border rounded-md"
      >
        <h1 className="text-6xl">
         {a}
        </h1>
        <div id="btn" className="flex gap-10">
          <button className="w-50 h-10 border bg-sky-300" onClick={increment}>
            Increment
          </button>
          <button className="w-50 h-10 border bg-sky-300" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div> */}
      <h1 className="text-6xl">{num.user}  {num.age}</h1>
      <button onClick={counter} className="rounded">Click</button> 

    </div>
  );
};

export default App;
