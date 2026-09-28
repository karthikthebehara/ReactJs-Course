import React from 'react'
import { MoveRight } from 'lucide-react';
const RightcardContent = (props) => {
  return (
        <div className='absolute top-0 w-full h-full p-6 flex flex-col justify-between'>
        <h1 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-bold'>{props.id+1}</h1>
        <div>
            <p className='text-xl leading-relaxed text-white mb-10'>Explicabo, vitae incidunt delectus eos eveniet nulla alias earum ipsa architecto eius deserunt totam atque ab et ut, rerum impedit, officiis repudiandae?</p>
            <div className='flex justify-between'>
                <button  style={{backgroundColor:props.color}} className=' text-white  font-semibold px-4 py-3 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='bg-blue-600  text-white  font-semibold px-4 py-3 rounded-full'><MoveRight /></button>
            </div>
        </div>

      </div>
  )
}

export default RightcardContent
