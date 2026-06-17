import React from 'react'
import { BsCart, BsPersonPlus } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Headers = () => {
    return (
        <>
            <div className="flex bg-slate-300 flex-col md:flex-row py-1.25 items-center">
                <div className="logo w-full md:w-1/4 text-center text-2xl font-bold text-blue-500 cursor-pointer">
                    STORE FRONT
                </div>
                <div className="sear w-full md:w-1/2 flex px-10 py-2 md:px-5">
                    <input type="search" className='w-full border-slate-500 bg-white px-5'/>
                    <button className='px-5 bg-slate-700 text-white'>Search</button>
                </div>
                <div className="icons w-full md:w-1/4 text-2xl flex justify-evenly">
                    <button>
                        <RiLoginBoxFill/>
                    </button>
                    <button>
                        <BsPersonPlus/>
                    </button>
                    <button>
                        <BsCart/>
                    </button>
                </div>
            </div>

            <div className="bg-state-200 sticky top-0 z-99 bg-white">
                <div className="flex justify-evenly w-1/2 m-auto py-4">
                <Link to = {'/'}>Home</Link>
                <Link to = {'/about'}>About</Link>
                <Link to = {'/services'}>Service</Link>
                <Link to = {'/'}>Blogs</Link>
                <Link to = {'/contact'}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Headers