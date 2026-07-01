import React, { useContext } from 'react'
import Student from '../Component/Student'
import { MyContext } from '../hooks/MyContext'

const Classroom = () => {

    let msg = useContext(MyContext)
  return (
    <div className='p-10 text-2xl'>
        <h1>{msg}</h1>
        <Student name = 'abc' roll='12' address='KTM' />
        <Student name = 'krish' roll='21' address='LTP'/>
        <Student name = 'santa' roll='25' address='BKT'/>
    </div>
  )
}

export default Classroom