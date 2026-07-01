import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Headers from '../Component/layouts/Headers'

const ProductDisplay = () => {
    let [docs, setDocs] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setDocs(data))
            .then(data => console.log(data));
    },[])
  return (
    <>
    <Headers />
  <div className="grid grid-cols-4 gap-6 p-15">
    {docs.map((doc) => (
      <div
        key={doc.id}
        className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
      >
        <Link to={`/doc/${doc.id}`}>
          <img
            src={doc.image}
            alt={doc.title}
            className="h-48 w-full object-contain mb-4"
          />

          <h2 className="text-lg font-semibold mb-2 line-clamp-2">
            {doc.title}
          </h2>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3">
            {doc.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold text-xl">
              ${doc.price}
            </span>

            <span className="bg-slate-200 text-xs px-2 py-1 rounded">
              {doc.category}
            </span>
          </div>
        </Link>
      </div>
    ))}
  </div>
  </>
);
}

export default ProductDisplay