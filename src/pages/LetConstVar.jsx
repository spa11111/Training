import React from 'react'

const LetConstVar = () => {
  return (
    <div>
      <h1 className = 'text-4xl text-center underline text-blue-400 py-5 font-bold hover:text-5xl md:text-xl'>Let/Const/Var</h1>
    
    <div className = 'lg:grid lg:grid-cols-3'>
      <div>
        <h1>LET</h1>
        <ul>
          <li>defines variables that is local i.e. values can be changed but its only for local (one)</li>
        </ul>
      </div>
      <div>
        <h1>CONST</h1>
        <ul>
          <li>defines constants i.e. values that cannot be changed</li>
        </ul>
      </div>
      <div>
        <h1>VAR</h1>
        <ul>
          <li>defines variables that is global i.e. values is for overall</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default LetConstVar