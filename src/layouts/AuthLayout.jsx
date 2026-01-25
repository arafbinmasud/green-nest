import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <main className='flex-1 flex flex-col w-11/12 mx-auto'>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default AuthLayout;