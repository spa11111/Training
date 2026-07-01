import React from 'react'
import Headers from '../Component/layouts/Headers'

const About = () => {
    return (
        <>
        <Headers/>
        <div className="about w-1/2 m-auto py-4">
        <h2 className= "size text-2xl font-semibold text-center py-4">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <p className="mb-4 text-justify"> c   
              Store Front is a modern online shopping platform dedicated
              to providing customers with quality products at affordable
              prices. We aim to make online shopping simple, secure, and
              enjoyable for everyone.
            </p>

            <p className="mb-4 text-justify">
              Our mission is to connect customers with a wide variety of
              products while ensuring excellent customer service and fast
              delivery. We continuously work to improve our platform and
              provide the best shopping experience possible.
            </p>

            <p className="text-justify">
              We believe in customer satisfaction, innovation, and
              reliability. Thank you for choosing Store Front as your
              trusted shopping destination.
            </p>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="./12.png"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

        </div>
        </div>
        </>
    )
}

export default About