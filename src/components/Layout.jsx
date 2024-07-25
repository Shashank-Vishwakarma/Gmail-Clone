import React, { lazy } from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = lazy(() => import('./Navbar'));
const Sidebar = lazy(() => import('./Sidebar'));

const Layout = () => {
  return (
    <div className='relative'>
        <Navbar/>

        <div className='px-2 flex gap-6' style={{
            height: 'calc(100vh - 80px)',
        }}>
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
