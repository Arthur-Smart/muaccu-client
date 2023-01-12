import React from 'react'
import Tab from '../tab/Tab'
import './datasocket.css'

function DataSocket() {
  return (
    <div className='datasocket py-10 flex flex-col py-4 items-center justify-center'>
        <p className='text-center text-xl font-medium  text-gray-600'>Some facts about us</p>
        <Tab/>
        <div className='container mt-4 flex items-center justify-between'>
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-slate-200'>
                <p className='font-bold text-5xl  text-gray-600'>1200</p>
                <p className='font-medium text-gray-600'>In session</p>
            </div>
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-green-700'>
                <p className='font-bold text-5xl text-white'>15</p>
                <p className='text-white font-medium'>Number of Bible study</p>
            </div>
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-cyan-600'>
                <p className='font-bold text-5xl text-white'>11</p>
                <p className='text-white font-medium'>Number of ministries</p>
            </div>
            <div className='data-container rounded-md flex flex-col items-center justify-center bg-slate-200'>
                <p className='font-bold text-5xl  text-gray-600'>5</p>
                <p className='font-medium text-gray-600'>Projects work in progress</p>
            </div>
        </div>
    </div>
  )
}

export default DataSocket