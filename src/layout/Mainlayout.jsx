import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

const Mainlayout = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto ">
        <Navbar />
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  )
}

export default Mainlayout