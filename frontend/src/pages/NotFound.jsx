import React from 'react';

function NotFound() {
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <h1 className='text-2xl font-semibold'>404 - Page Not Found</h1>
      <span className='text-xl text-gray-800'>The page you're looking for does not exist.</span>
    </div>
  );
}

export default NotFound;
