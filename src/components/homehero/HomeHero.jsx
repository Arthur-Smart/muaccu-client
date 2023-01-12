import React from 'react'
import Animation from '../animation/Animation'
import './homehero.css'

function HomeHero() {
  return (
    <div className='homehero flex flex-col items-center justify-center'>
        <div className='container flex items-center justify-center'>
            <div className='texts-container flex flex-col items-ceter justify-center text-white'>
                <p className='text-center mb-1 text-3xl font-bold title'>AN OPEN INVITATION TO</p>
                <p className='text-center mb-2 text-xl font-medium'>MOI UNIVERSITY ANNEX CAMPUS CHRISTIAN UNION</p>
                <p className='text-center'>Our Theme Verse: "Isaiah 55: 6 Seek ye the LORD while He may be found, call ye upon him while he is</p>
                <button className='join-btn border-2 self-center my-2 py-2 px-4 rounded-md bg-green-700 hover:bg-green-800 hover:text-white'>JOIN US</button>
                <div className='divider'></div>
                <div className='py-4'>
                    <p className='text-center text-xl font-medium'>WORSHIP WITH US EVERY WEDNESDAY AND SUNDAY</p>
                    <p className='text-center'>5:00PM - 7:00PM | 8:30AM - 12 NOON</p>
                </div>
                <div className='flex items-center justify-center'>
                  <p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-facebook fa-2x mr-3 cursor-pointer"></i></p>
                  <p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-instagram fa-2x cursor-pointer"></i></p>
                  <p className='text-slate-300 hover:text-white' ><i class="fa-brands fa-square-youtube fa-2x ml-3 cursor-pointer"></i></p>
                </div>
            </div>
        <Animation/>
      </div>        
    </div>
  )
}

export default HomeHero