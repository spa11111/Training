import React from "react"
import Headers from '../Component/layouts/Headers'

const Contact = () => {
    return (
        <>
         <Headers/>

         <div className="contact w-1/2 m-auto py-4">
    <h2 className= "size text-2xl font-semibold text-center py-4">Contact Us</h2>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Left Column */}
          <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
              Get In Touch
            </h2>

            <p className="mb-3">
              <strong>Email:</strong> support@storefront.com
            </p>

            <p className="mb-3">
              <strong>Phone:</strong> +977 98XXXXXXXX
            </p>

            <p className="mb-3">
              <strong>Address:</strong> Kathmandu, Nepal
            </p>

            <div className="mt-5">
              <h3 className="font-semibold mb-2">
                Follow Us
              </h3>

              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter/X</p>
              <p>LinkedIn</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-2 border rounded"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Second Row - Map */}
        <div className="bg-slate-100 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Location
          </h2>

          <iframe
            title="map"
            className="w-full h-96 rounded"
            src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>

      </div>
        </>
    ) 
}

export default Contact