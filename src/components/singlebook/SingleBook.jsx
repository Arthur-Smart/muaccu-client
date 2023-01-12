import React from 'react'
import './singlebook.css'

function SingleBook() {
  return (
    <div className='book-container rounded-md'>
        <div className='name-container bg-green-700 px-2'>
            <p className='text-white font-medium text-lg' >Revelation in prayers</p>
            <p className='text-white' ><strong>By:</strong> Kelvin Whales</p>
        </div>
        <div className='download flex items-center justify-center  rounded-md cursor-pointer'>
            <a href="#" title='download'>
                <img className='download-icon' src={require('../../assets/download.png')} alt=''/>
            </a>
        </div>
        <img src={require('../../assets/team.jpg')} alt=''/>                
    </div>
  )
}

export default SingleBook