import React from 'react'
import Tab from '../tab/Tab'
import './updates.css'

function Updates() {
  return (
    <div className='updates flex flex-col items-center justify-center py-8'>
        <p className='text-center text-3xl font-bold text-gray-600'>Our weekly updates</p>
        <p className='text-lg'>Our weeky sermons updates for every Wednesday and Sundays. We keep you notified</p>
        <Tab/>
        <div className='container mt-10 flex items-center justify-between'>
            <div className='updates-left flex flex-col'>
                <p className='text-center my-2 font-medium text-lg text-green-700'>Wednesday service</p>
                <div className='flex'>
                    <div className='img-container rounded-md'>
                        <img src={require('../../assets/team.jpg')} alt=''/>
                    </div>
                    <div className='updates-data ml-3'>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='updates-right flex flex-col'>
                <p className='text-center my-2 font-medium text-lg text-green-700'>Sunday service</p>
                <div className='flex'>
                    <div className='img-container rounded-md'>
                        <img src={require('../../assets/team.jpg')} alt=''/>
                    </div>
                    <div className='updates-data ml-3'>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                        <div className='text-container rounded-md py-3 px-5 text-white bg-green-700'>
                            <p><strong>Topic:</strong>Living for Christ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Updates