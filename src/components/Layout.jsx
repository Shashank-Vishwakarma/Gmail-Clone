import React, { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import SendEmail from './SendEmail';

const Navbar = lazy(() => import('./Navbar'));
const Sidebar = lazy(() => import('./Sidebar'));

const Layout = () => {
  const open = true;

  return (
    <div className='relative'>
        <Navbar/>

        <div className='px-2 flex gap-6' style={{
            height: 'calc(100vh - 80px)',
        }}>
            <Sidebar/>
            <Outlet/>
        </div>

        {
          open ? <SendEmail /> : <></>
        }
    </div>
  )
}

export default Layout
