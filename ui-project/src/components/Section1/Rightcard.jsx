import React from 'react'

import RightcardContent from './RightcardContent';

const Rightcard = (props) => {
  return (
    <div  className='h-full w-75  overflow-hidden relative rounded-4xl shrink-0'>
      <img  className="h-full w-fill object-cover"    src={props.img} alt="" />
      <RightcardContent tag={props.tag}  id={props.id} color={props.color}/>

    </div>
  )
}

export default Rightcard
