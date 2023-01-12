import React from 'react'
import Tab from '../tab/Tab'
import './serviceandvideos.css'

function ServiceAndVideos({setShowVideos}) {
  return (
    <div className='service-video-wrapper flex gap-2'>
        <div className='service-v flex flex-col p-3 rounded-md'>
            <p className='font-medium text-lg py-1 text-slate-600'>Upload a video for your blog</p>
            <Tab/>
            <img className='rounded-md mt-3' src={require('../../assets/team.jpg')} alt=''/>
            <div className='flex flex-col mt-2'>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='file'/>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Enter topic'/>
                <div className='upload-btns flex'>
                    <button className='upload-btn py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Upload Video</button>
                    <button onClick={() => setShowVideos(true)} className='upload-btn py-2 px-4 border-2   mr-2 text-slate-700 font-medium rounded-md'>View uploaded videos</button>
                </div>
                
            </div>
        </div>
        <div className='service-p flex flex-col p-3 rounded-md'>
            <p className='font-medium text-lg py-1 text-slate-600'>Update your weekly services</p>
            <Tab/>
            <img className='rounded-md mt-3' src={require('../../assets/team.jpg')} alt=''/>
            <div className='flex flex-col mt-2'>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='file'/>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='Enter topic'/>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='text' placeholder='EnterVenue'/>
                <select className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                    <option>--Select day--</option>
                    <option value='wednesday'>Wednesday</option>
                    <option value='sunday'>Sunday</option>
                </select>
                <input className='upload-input border-2 py-3 px-1 mb-2 rounded-md outline-green-100'  type='date'/>
                <button className='upload-btn py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Upload</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceAndVideos