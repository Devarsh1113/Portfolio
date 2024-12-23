import React from 'react'
import { CONTACT } from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl text-white'>Get In Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4 text-white'>{CONTACT.address}</p>
            <p className='my-4 text-white'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b text-white'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact