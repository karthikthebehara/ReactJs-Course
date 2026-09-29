import React from 'react'

const App = () => {

  localStorage.setItem('user', 'Karthik');
  localStorage.setItem('age', 20);

  console.log(localStorage.getItem('user'));
  
  return (
    <div>App</div>
  )
}

export default App