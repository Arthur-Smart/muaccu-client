import React, {useState} from 'react'
import AppointmentsMade from '../../components/appointmentsmade/AppointmentsMade'
import CreatedArticles from '../../components/createdarticles/CreatedArticles'
import CreatedVideos from '../../components/createdvideos/CreatedVideos'
import RegisteredMembers from '../../components/registeredmembers/RegisteredMembers'
import ServiceAndVideos from '../../components/serviceandvideos/ServiceAndVideos'
import Tab from '../../components/tab/Tab'
import './admin.css'

function Admin() {
  const [publish, setPublish] = useState(false)
  const [showArticles, setShowArticles] = useState(false)
  const [showVideos, setShowVideos] = useState(false)
  return (
    <div className='admin flex flex-col items-center justify-center'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10 items-center'>
                <p className='text-white text-center text-2xl font-bold'>Welcome to the admin panel for Moi University Annex Campus Christian Union</p>
                <p className='text-center text-white'>Create blog articles | upload videos | Check appointments | Check new members here</p>
                <div className='mt-3'>
                    <button onClick={() => setPublish(true)} className='py-2 px-4 border-2 bg-red-600 hover:bg-red-700 mr-2 text-white rounded-md'>Create article</button>
                    <button onClick={() => setShowArticles(true)} className='border-2 py-2 px-4 rounded-md ml-2 hover:bg-white hover:text-black text-white'>All articles</button>
                </div>
            </div>
        </div>
        <div className='container flex flex-col items-center justify-center'>
        <div className='registered-members flex flex-col'>
            <p className='font-medium text-lg py-1 text-slate-600'>Registered Members</p>
            <Tab/>
            <RegisteredMembers/>
        </div>
        <div className='appointments-made my-10'>
            <p className='font-medium text-lg py-1 text-slate-600'>Appointments Made</p>
            <Tab/>
            <AppointmentsMade/>
        </div>
        <div className='service-video'>
            <ServiceAndVideos setShowVideos={setShowVideos}/>
        </div>
        {publish && (
          <div className='modal flex items-center justify-center'>
            <div className='create-article flex flex-col items-center rounded-md p-3'>
                <p onClick={() => setPublish(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
                <p className='text-center font-medium text-slate-600'>Publish article</p>
                <Tab/>
                <input className='publish-input border-2 py-3 px-1 my-2 rounded-md outline-green-100' type='text' placeholder='Article title'/>
                <textarea className='publish-textarea border-2 py-3 px-1 mb-2 rounded-md outline-green-100' placeholder='Write content'></textarea>
                <img ssrc='' alt=''/>
                <input style={{display:'none'}} type='file' id='image'/>
                <label htmlFor='image' className='cursor-pointer border-2 px-2 rounded-md'>
                  <img src={require('../../assets/pic.png')} alt=''/>
                </label>
                <button className='upload-btn mt-2 py-2 px-4 border-2 bg-green-700 hover:bg-green-800 mr-2 text-white rounded-md'>Publish</button>
            </div>
        </div>
        )}
        {showArticles && (
            <div className='modal flex flex-col items-center justify-center'>
          <div className='container flex flex-col items-center bg-white p-3 rounded-md'>
            <p onClick={() => setShowArticles(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
            <p className='text-center font-medium text-slate-600'>All your written articles</p>
            <Tab/>
            <CreatedArticles/>
          </div>          
        </div>
        )}

        {showVideos && (
          <div className='modal flex flex-col items-center justify-center'>           
          <div className='container flex flex-col items-center bg-white p-3 rounded-md'>
            <p onClick={() => setShowVideos(false)} className='text-end text-2xl text-red-700 cursor-pointer'><i class="fa-solid fa-circle-xmark"></i></p>
            <p className='text-center font-medium text-slate-600'>All your video uploads</p>
              <Tab/>
              <CreatedVideos/>
            </div>
        </div>
        )}                     
        </div>
        
    </div>
  )
}

export default Admin