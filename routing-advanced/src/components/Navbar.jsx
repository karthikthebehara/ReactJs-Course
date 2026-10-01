import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-cyan-800 '>
      <h2 className='text-xl font-bold'>Learn Logic</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/products'>Products</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar