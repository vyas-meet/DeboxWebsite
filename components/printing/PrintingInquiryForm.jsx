
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import React, { Component, useEffect } from 'react'
import Select from 'react-select'

import PhoneInput from 'react-phone-number-input'



function PrintingInquiryForm({ productList, formName }) {

    return (
        <>
            <section className="bg-gray-100 shadow-2xl">
                <div className="max-w-screen-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="">
                        <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                            <form name={formName} data-netlify="true" action={`/printing?submit=true`} method="POST" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Full Name</label>
                                    <input className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg
                                    " placeholder="Full Name" type="text" id="name" name='fullName' />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name='email'
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        {/* <Input
                                            className="bg-white w-full p-3 rounded text-sm md:text-base border-2 border-gray-200     lg:text-base xl:text-base "
                                            country="US"
                                            onChange={() => null}
                                            placeholder="Phone Number"
                                        /> */}
                                        <PhoneInput
                                            name="phoneNumber"
                                            placeholder="Enter phone number"
                                            className='bg-white w-full p-3 rounded text-sm md:text-base border-2 border-gray-200     lg:text-base xl:text-base'
                                            onChange={() => null}
                                            defaultCountry="US"
                                            required
                                        />
                                    </div>
                                </div>



                                <Select options={productList} placeholder="Product(s) Required" isMulti={true} />


                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <textarea
                                        className="w-full p-3 text-sm md:text-base lg:text-base xl:text-base border-2 border-gray-200 rounded-lg"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>


                                <div className='pl-2 flex gap-4'>
                                    Urgent Requirement?
                                    <div className='flex items-center gap-4'>
                                        <div>
                                            <input className='mx-1' type="radio" name="urgent" id="urgent" />
                                            <label htmlFor="urgent">Yes</label>
                                        </div>
                                        <div>
                                            <input className='mx-1' type="radio" name="urgent" id="not-urgent" />
                                            <label htmlFor="not-urgent">No</label>
                                        </div>

                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-primary rounded-lg sm:w-auto"
                                    >
                                        <span className="font-medium"> Send Enquiry </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 ml-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default PrintingInquiryForm