import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../redux/slice';
import { IoMdLogOut } from "react-icons/io";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchInput,setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { user } = useSelector(store=> store.appSlice);

  useEffect(()=>{
    dispatch(setSearchText(searchInput));
  }, [searchInput]);

  const handleLogout = async ()=>{
      try {
        await auth.signOut();

        dispatch(setUser(null));
        navigateTo('/login');
      } catch(err) {
        console.log(err);
      }
  }

  return (
    <div className='flex items-center justify-between h-20 sticky'>
      {/* Showing Hamburger icon and logo */}
      <div className='flex items-center justify-center gap-5 px-4'>
        <RxHamburgerMenu size={30} />
        <img className='h-10' src="/gmail.png" alt="Gmail Logo" />
        <h1 className='text-2xl font-medium'>Gmail</h1>
      </div>

      {/* Search bar */}
      <div className='flex items-center rounded-full px-2 bg-gray-300 w-1/3 h-12'>
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Search Mail' className='outline-none rounded-full w-full bg-gray-300 p-2' />
        <IoMdSearch size={27} />
      </div>

      {/* Showing user profile */}
      <div className='flex items-center justify-center px-4 gap-6'>
        <GoQuestion size={27} className='cursor-pointer'/>
        <IoSettingsOutline size={27} className='cursor-pointer'/>
        <PiDotsNineBold size={27} className='cursor-pointer'/>
        {
          user ? <img src={user?.photoURL} className='cursor-pointer rounded-full' height={27} width={27} /> : <FaUserCircle size={27} className='cursor-pointer'/>
        }
        <IoMdLogOut size={27} onClick={handleLogout} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar
