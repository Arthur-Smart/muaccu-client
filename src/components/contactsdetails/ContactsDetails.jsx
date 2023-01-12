import React from 'react'
import './contactsdetails.css'

function ContactsDetails() {
  return (
    <div className='contacts-details flex items-center justify-center py-10'>
        <div className='container flex  justify-between'>
            <div className='contact-left'>
                <form className='rounded-md border-2 flex flex-col items-center py-2'>
                    <div className='inputs-wrapper flex items-center justify-center gap-3'>
                        <div className='input-wrapper'>
                            <label className='font-medium text-slate-600'>Your Name *</label>
                            <input  className='contact-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='text' placeholder="&#x1F464; Full Name" required/>
                        </div>
                        <div className='input-wrapper'>
                            <label className='font-medium text-slate-600' >Your Email *</label>
                            <input className='contact-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='email' placeholder="&#x2709; Enter Email" required/>
                        </div>
                    </div>
                    <div className='textarea-container mt-3'>
                        <p className='font-medium text-slate-600'>Write comment *</p>
                        <textarea className='contact-textarea border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' placeholder="&#x1F4E7; Message" required></textarea>
                    </div>
                    <button className='contact-btn py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Submit</button>
                </form>
            </div>
            <div className='contact-right'>
                <p className='font-bold text-gray-600 text-2xl'>Our contacts details</p>
                <p  className='font-medium text-gray-600 '>Your questions, comments, inquiries and more are much welcomed. Lets connect.</p>
                <div className='mt-3'>
                    <p className='mb-1' ><i class="fa-regular fa-envelope"></i> <strong>Email:</strong> muaccu@gmail.com</p>
                    <p className='mb-1' ><i class="fa-solid fa-phone"></i> <strong>Phone:</strong> 0758948674</p>
                    <p className='mb-1' ><i class="fa-solid fa-location-dot"></i> <strong>Location:</strong> Annex, Eldoret Kenya</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactsDetails