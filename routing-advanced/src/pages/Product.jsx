import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/products/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/products/women'>Women</Link>
        <Link className='text-xl font-semibold' to='/products/kids'>Kids</Link>
        <Outlet />
      </div>
        {/* <h1>Products</h1> */}
    </div>
  )
}

export default Product