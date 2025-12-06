import React from 'react'
import Nav from '../Components/Nav/Nav'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router'
import Basket from '../Components/Basket/Basket'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
    return (
        <>
            <ToastContainer />
            <div className='flex w-full'>
                <SideBar />
                <div className='w-full bg-[#F1F3F4]'>
                    <Nav />
                    <Outlet />
                </div>
            </div>
            <Basket />
        </>
    )
}

export default Layout