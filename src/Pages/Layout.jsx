import React from 'react'
import Nav from '../Components/Nav/Nav'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <SideBar />
        </div>
    )
}

export default Layout