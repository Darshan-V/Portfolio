import React, { useState } from "react"
import Image from "next/image"
import axios from "axios"

import SubmitButton from "./SubmitButton"
import AlertDialogButton from "./AlertDialogButton"
import AlertInvalidEmail from "./AlertInvalidEmail"

const ContactBox = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = async () => {
    if (!name && !email) {
      return null
    }

    try {
      const response = await axios.post(
        "/api/mailer",
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log(response.data)

      if ((response.status = 200)) {
        // Request was successful
        setEmailSent(true)
      } else {
        // Request was not successful
        console.error("Request failed")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleEmailChange = (event: { target: { value: any } }) => {
    const { value } = event.target
    setEmail(value)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsValidEmail(emailPattern.test(value))
  }

  return (
    <>
      {!emailSent ? (
        <div className='flex flex-col mt-5 md:w-1/2 w-full relative m-auto '>
          <hr className='h-2 w-1/2 bg-white rounded-xl bg-gradient-to-r from-orange-600 to-yellow-400'></hr>
          <hr className='w-2 h-1/3 bg-white absolute rounded-xl bg-gradient-to-b from-orange-600 to-yellow-400'></hr>
          <div className='flex flex-col gap-y-8 px-5 py-5'>
            <input
              placeholder='Name'
              type='text'
              className='bg-transparent md:p-5 p-3 border-2 rounded-lg border-yellow-400 focus:outline-none focus:border-4 focus:border-blue-500 focus:border-double md:w-full md:text-lg text-sm'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder='Email'
              type='email'
              className='bg-transparent md:p-5 p-3 border-2 rounded-lg border-yellow-400 focus:outline-none focus:border-4 focus:border-blue-500 focus:border-double md:w-full md:text-lg text-sm'
              onChange={handleEmailChange}
              value={email}
            />
            {isValidEmail || email.length === 0 ? null : <AlertInvalidEmail />}
            <textarea
              placeholder='Message'
              className='bg-transparent resize-none md:h-40 md:p-5 p-3 border-2 rounded-lg focus:outline-none border-yellow-400 focus:border-4 focus:border-blue-500 focus:border-double md:w-full md:text-lg text-sm'
              onChange={(e) => setMessage(e.target.value)}
            />

            {!name && !email ? (
              <AlertDialogButton />
            ) : (
              <SubmitButton handleSubmit={handleSubmit} />
            )}
          </div>
        </div>
      ) : (
        <div className='flex flex-col mt-5 md:w-1/2 w-fit h-52 relative m-auto'>
          <hr className='h-2 w-full bg-white rounded-xl bg-gradient-to-r from-orange-600 to-yellow-400'></hr>
          <hr className='w-2 h-32 bg-white absolute rounded-xl bg-gradient-to-b from-orange-600 to-yellow-400'></hr>
          <div className='w-full h-fit p-5'>
            <h1 className='md:text-4xl font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400 tracking-wider font-Sriracha'>
              Thankyou!
            </h1>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactBox
