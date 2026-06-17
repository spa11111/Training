import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="bg-slate-300 py-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

    <div>
      <h2 className="text-2xl font-bold text-blue-500">
        STORE FRONT
      </h2>
      <p>Your one-stop online shopping destination.</p>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Contact</h3>
      <p>Email: storefront@gmail.com</p>
      <p>Phone: +977 98XXXXXXXX</p>
    </div>

  </div>

  <div className="text-center mt-6 border-t pt-4">
    © 2026 Store Front. All Rights Reserved.
  </div>
</div>
    </>
  )
}

export default Footer