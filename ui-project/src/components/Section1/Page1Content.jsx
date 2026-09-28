import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex-1 min-h-0 py-3 px-10 flex items-center justify-between gap-10'>

        <LeftContent />
        <RightContent users ={props.users}/>
      
    </div>
  )
}

export default Page1Content
