import React from 'react';
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux';
import { signInWithGooglePopup } from '../firebase/firebase';
import { setUser } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleGoogleSignIn = async ()=>{
      try {
        const response = await signInWithGooglePopup();
        
        // make user info available globally in the project
        dispatch(setUser({
          displayName: response.user.displayName,
          photoURL: response.user.photoURL,
          email: response.user.email
        }));

        navigateTo('/');
      } catch(err) {
        console.log(err);
      }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-8 bg-white flex flex-col gap-3 rounded-md'>
        <h1 className='text-center text-xl font-medium mb-5'>LOGIN</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default Login
