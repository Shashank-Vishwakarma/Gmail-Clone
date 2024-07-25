import React from 'react';
import GoogleButton from 'react-google-button'

const Login = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-8 bg-white flex flex-col gap-3 rounded-md'>
        <h1 className='text-center text-xl font-medium mb-5'>LOGIN</h1>
        <GoogleButton />
      </div>
    </div>
  )
}

export default Login
