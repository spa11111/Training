import React from "react"
import Headers from '../Component/layouts/Headers'

const Services = () => {
    return (
        <>
         <Headers/>
         <div className="services w-1/2 m-auto py-4">
    <h2 className= "size text-2xl font-semibold text-center py-4">Our Services</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Product Delivery
            </h2>
            <p>
                Fast and reliable delivery service to bring your products
                directly to your doorstep.
            </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Secure Payment
            </h2>
            <p>
                Multiple secure payment options including online banking,
                cards, and digital wallets.
            </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Customer Support
            </h2>
            <p>
                Dedicated support team available to assist customers with
                inquiries and issues.
            </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Easy Returns
            </h2>
            <p>
                Hassle-free return and refund process for eligible products.
            </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Product Warranty
            </h2>
            <p>
                Warranty coverage on selected products to ensure customer
                satisfaction and trust.
            </p>
        </div>

        <div className="bg-slate-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">
                Special Discounts
            </h2>
            <p>
                Regular promotional offers and discounts for loyal customers.
            </p>
        </div>

    </div>
</div>
        </>
    ) 
}

export default Services