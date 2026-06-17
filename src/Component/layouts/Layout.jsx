import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MyCaruosal from '../MyCarousal'


const Layout = () => {
  return (
    <>
    <Headers />
    <section style = {{minHeight : '80vh'}}>
        <MyCaruosal />
    </section>
    <Footer />
    </>
  )
}

export default Layout