import React from 'react';
import { Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <div className='text-center mt-2'>
      <h2 className='Honk_font'>Blogs Section</h2>
      <Outlet/>
    </div>
  )
}

export default Posts
