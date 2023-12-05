/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeimage from '../../Assets/homepage.png';

export default function Outpass() {
  const [reason, setReason] = useState()
  const [name, setName] = useState()
  const [rollno, setRollno] = useState()
  const [email, setEmail] = useState()
  const [address , setAddress] = useState()
  const [city, setCity] = useState()

  const navigate  = useNavigate()

  const handleOutpass = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3002/outpass' , {reason ,name ,rollno, email ,address, city})
    .then(result => console.log(result),
    navigate('/home')
    )
    .catch(err=>console.log(err))


    emailjs.sendForm('service_afn90so', 'template_39sr3wp', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }



  const form = useRef();




  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "80%", display: "flex", marginTop: "130px" }}>
        <div style={{ width: "50%" }} >
          <form onSubmit={handleOutpass} ref={form}>
            <div className="space-y-10">
              <div className="border-b border-gray-900/10 pb-12">
                <h1 className="text-base font-bold leading-10 text-gray-900">Outpass Information</h1>
                <p className="mt-1 text-sm leading-6 text-gray-600">Enter all the details carefully details will be shared with parents.</p>
                <div className="col-span-full">
                  <label htmlFor="reason" className="block text-sm font-medium leading-6 text-gray-900">
                    Reason for leave
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="rollno" className="block text-sm font-medium leading-6 text-gray-900">
                      Enrollment Numer
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="rollno"
                        id="rollno"
                        onChange={(e) => setRollno(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                      Address on leave
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="ddress"
                        autoComplete="address"
                        onChange={(e) => setAddress(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link to="/home">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                  Back
                </button>
              </Link>
              <button
              type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={homeimage} alt="" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </div>
  )

}
