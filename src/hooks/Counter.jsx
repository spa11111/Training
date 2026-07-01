import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    let [data, setData] = useState(100);

const decrease = () => {
    if (count>0){
        setCount(count-1)
    }
}

const decrement = () => {
    if (data>0){
        setData(data-10)
    } 
}
 
    /*
    let [variable_name, function] = useState (initial value)
    variable_name = name of the state variable
    function: function to update state variable
    initial value: 0-9
    String: '' or ""
    boolean: true, false
    array: []
    js objects:{}

useState: render components when state change


    useEffect: to show side effect when state changes
    syntax:
    useEffect(function, [dependency])
    function -> side effects to show
    dependency -> state that triggers the function
    useEffect(() => {}, []) -> effect is seen on page load only 
    useEffect(() => {}, [a,b,c]) -> effect is seen on page load and when a,b,c change
    useEffect(() => {}) -> effect is seen when any state change. page slow and a VERY bad practice

]

    */


// useEffect(() => {
//     alert("Value updated")
// }, []) 

useEffect(() => {
    alert("Value updated")
}, [count, data]) 




  return (
    <>
    <div className='h-[40vh] flex justify-center items-center text-4xl flex-col gap-3'>
       Count: {count}
        <button onClick={() => {
            setCount(count+=1)
        }} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Increase</button>

        <button onClick={decrease} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Decrease</button>

        <button onClick={() => {
            setCount(0)
        }} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Reset</button>
    </div> 

     <div className='h-[40vh] flex justify-center items-center text-4xl flex-col gap-3'>
       Data: {data}
        <button onClick={() => {
            setData(data+=10)
        }} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Increase</button>

        <button onClick={decrement} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Decrease</button>

        <button onClick={() => {
            setData(100)
        }} className='bg-blue-500 hover:bg-blue-800 active:bg-blue-600 px-5 py-2 uppercase text-white'>Reset</button>
    </div>
    </> 

  )
}

export default Counter