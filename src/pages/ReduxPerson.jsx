import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxPerson = () => {
//three options:
    //let personStore = useSelector(store => store)

    //let name = useSelector(store => store.name)
    //let phone = useSelector(store => store.phone)

    //let {name, phone} = useSelector(store => store)
  
let {name, phone} = useSelector(store => store.personStore)
console.log(name, phone)
let [namee, setName] = useState('')
let [phonee, setPhone] = useState('')

const updatePhone = e => {
    setPhone(e.target.value)
}

const dispatch = useDispatch()

    return (
    <div className= 'flex flex-col items-center justify-center gap-4 h-[70vh]'>
        <h2>NAME: {name}</h2>
        <input type = 'text' className= 'border  px-5 py-3' placeholder = 'Enter name' onChange={e => setName(e.target.value)}/>
        <button className= 'border bg-blue-400 text-white px-5 py-3 ' onClick={() => dispatch({ type: "UPDATE_NAME", payload: namee })}>Update Name</button>

        <h2>PHONE: {phone}</h2>
        <input type = 'text' className= 'border  px-5 py-3' placeholder = 'Enter phone' onChange={updatePhone}/>
        <button className= 'border bg-blue-400 text-white px-5 py-3' onClick={() => dispatch({ type: "UPDATE_PHONE", payload: phonee })}>Update Phone</button>
    </div>
  )
}

export default ReduxPerson