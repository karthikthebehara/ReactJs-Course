import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-2 flex gap-10 flext-nowrap overflow-x-auto'>
      {props.users.map((el, idx)=>{
        return <Rightcard key={idx} id={idx} img={el.img} tag={el.tag} color={el.color}/>
      })}
    </div>
  ) 
}

export default RightContent
