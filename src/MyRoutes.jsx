import React from 'react'
import First from './First'
import Second from './Second'
import LetConstVar from './pages/LetConstVar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RevisionLayout from './Component/layouts/RevisionLayout'
import PageNotFound from './pages/PageNotFound'
import Layout from './Component/layouts/Layout'
import MyCaruosal from './Component/MyCarousal'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes >


        <Route index element = {<Layout />}>
        </Route>

        <Route path = '/carousal' element= {<MyCaruosal/>} />

        <Route path = '/about' element= {<About/>} />


        <Route path = '/services' element= {<Services/>} />

        <Route path = '/contact' element= {<Contact/>} />



    {/* //Landing page */}
        {/* <Route index element= {<HomePage/>} /> */}

        {/* //Single route : /second */}
        {/* <Route path = '/second' element= {<Second/>} /> */}
        
        {/* //Nested route : /topic1/content */}
        {/* <Route path = '/topic1' element = {<LetConstVar/>}>
            <Route path = 'content' element = {<h1>Topic 2</h1>} />
        </Route> */}

        {/* <Route path = '/revision' element = {<RevisionLayout/>}>
            <Route path = 'topic1' element = {<LetConstVar/>} />
            <Route index element = {<First/>} />
        </Route>

        <Route path = '*' element = {<PageNotFound/>} />  */}

  
      </Routes>       
    </BrowserRouter>
  )
}

export default MyRoutes