import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='cards-container'>
      <Card name='Pawan Kalyan' img="https://i.pinimg.com/474x/e7/27/67/e7276737a61169f8fa8ad493ee6fb06b.jpg" />
      <Card name ="Prabhas" img ='https://i.pinimg.com/474x/de/da/5b/deda5b2ea12023eea443aaf9cd024f75.jpg'/>
      <Card name ='Allu Arjun' img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWObAtaFSVuV9EjryAjdHxjuJ-CFcbT1cbLA5l8paFg&s=10'/>
      <Card name='N T R' img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaSb2RZ6QWMEvvKhzwnmi7IeNnquz3IleVVB4UMs7Dg&s=10' />
      <Card name='Mahesh Babu' img='https://i.pinimg.com/474x/94/cb/88/94cb88d8bb9cae57e30d068f8a76fcef.jpg'/>
      <Card name='Ram Charan' img='https://i.pinimg.com/474x/6e/ff/8f/6eff8f2b73b921b1cf87d558fe368293.jpg'/>
    </div>
  )
}

export default App
