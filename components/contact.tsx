import styles from './content.module.css'
import { motion } from 'framer-motion'
import React, { RefObject, useRef, MutableRefObject, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const colors = ['#ef9a9a', '#ce93d8', '#90caf9', '#ce93d8']

  const form: MutableRefObject<HTMLFormElement | null> =
    useRef<HTMLFormElement | null>(null)

  let [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    sent: false,
  })

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const serviceId = process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      console.log('Missing environment variable for emailJS')
      console.log(serviceId, templateId, publicKey)
      return
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current as HTMLFormElement | string,
        publicKey
      )
      .then(
        (result) => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            sent: true,
          }))
          console.log('message sent')
          setFormData({ name: '', contact: '', message: '', sent: true })
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  // needs to be a form that sends an email to me with a submit button
  return (
    <>
      <div className="pt-10 w-full h-full">
        <motion.div
          className="blur h-1/6 w-11/12 md:w-2/3"
          animate={{ backgroundColor: colors }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ opacity: 0.4, position: 'absolute' }}
        ></motion.div>
        <form
          ref={form}
          className="p-6 pb-20 flex flex-col justify-center items-start gap-y-10"
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-4 relative w-full md:w-1/2">
            <h1
              className="text-3xl font-Header text-slate-700 opacity-60"
              id="Contact"
            >
              CONTACT ME
            </h1>
            <label
              className={`${styles.whitetextshadow} text-xl text-white shadow-m font-Roboto font-thin`}
              htmlFor="name"
            >
              name
            </label>
            <input
              required
              className="p-1 font-Roboto font-thin outline-none bg-white rounded-sm"
              type="text"
              onChange={handleInputChange}
              name="name"
              value={formData.name}
            ></input>
            <label
              className={`${styles.whitetextshadow} text-xl text-white shadow-m font-Roboto font-thin`}
              htmlFor="name"
            >
              contact
            </label>
            <input
              required
              className="p-1 font-Roboto font-thin md:text-md outline-none bg-white rounded-sm"
              type="text"
              name="contact"
              value={formData.contact}
              placeholder="example@gmail.com or 555-555-5555"
              onChange={handleInputChange}
            ></input>
            <label
              className={`${styles.whitetextshadow} text-xl text-white shadow-m font-Roboto font-thin`}
              htmlFor="name"
            >
              message
            </label>
            <textarea
              className="p-1 h-32 w-full overflow-clip outline-none font-Roboto font-thin bg-white rounded-sm"
              name="message"
              required
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
            <button
              className={`${styles.whitetextshadow} text-xl text-white relative font-Roboto font-thin mt-6 hover:font-black`}
              value="Send"
            >
              Submit
            </button>
            {formData.sent && (
              <p
                className={`${styles.pshadow} text-xl text-white shadow-m font-Roboto font-thin`}
              >
                Message sent to biddy.mahy@gmail.com
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
