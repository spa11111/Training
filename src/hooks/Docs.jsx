import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Headers from '../Component/layouts/Headers'

const Docs = () => {

    //params - {id:12}
    let params = useParams()
    const id = params.id

    let[doc, setDoc] = useState({})
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setDoc(response.data))
        .catch(error => console.log(error))
    }, [])  

    //const {id} = useParams()
  return (
    <>
    <Headers />

    <div className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Product Image */}
    <div className="flex justify-center">
      <img
        src={doc.image}
        alt={doc.title}
        className="h-80 object-contain"
      />
    </div>

    {/* Product Details */}
    <div>
      <h1 className="text-3xl font-bold mb-4">
        {doc.title}
      </h1>

      <span className="inline-block bg-slate-200 px-3 py-1 rounded-full text-sm mb-4">
        {doc.category}
      </span>

      <p className="text-gray-700 leading-7 mb-6">
        {doc.description}
      </p>

      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        ${doc.price}
      </h2>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>

        <button className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
          Buy Now
        </button>
      </div>
    </div>

  </div>
</div>
</>
  )

}

export default Docs