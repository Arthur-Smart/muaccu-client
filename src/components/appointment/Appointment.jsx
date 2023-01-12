import React from 'react'
import Tab from '../tab/Tab'
import './appointment.css'

function Appointment() {
  return (
    <div className='appointment flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-gray-600 text-2xl'>Book an appointment with one of us</p>
        <p>Find direction and support in your faith journey with a Christian Union appointment.</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-5'>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type full name...'/>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='email' placeholder='Type email...'/>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type phone...'/>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Subject of appointment...'/>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='date'/>
            <button className='reg-btn font-medium border-2 py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-800'>Book</button>       
        </div>
    </div>
  )
}

export default Appointment