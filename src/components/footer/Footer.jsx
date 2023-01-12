import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer bg-green-700 flex  justify-center py-7'>
        <div className='container flex  justify-between'>
            <div className='footer-left'>
                <p className='text-white font-medium text-xl'>Powered by the power of God</p>
                <p className='text-white'>Phone: 0786948594 | muaccu@gmail.com</p>
                <div className='flex items-center'>
                    <p className='cursor-pointer text-white text-xl ' ><i class="fa-brands fa-square-facebook hover:text-red-600"></i></p>
                    <p className='cursor-pointer text-white text-xl ml-2 ' ><i class="fa-brands fa-square-instagram hover:text-red-600"></i></p>
                    <p className='cursor-pointer text-white text-xl ml-2 ' ><i class="fa-brands fa-square-youtube hover:text-red-600"></i></p>
                </div>
            </div>
            <div className='footer-right flex flex-col'>
                <p className='text-white font-medium text-xl text-end'>Subcribe to our news letter</p>
                <div className='flex flex-col items-end'>
                    <input className='subscribe-inputs border-2 py-3 px-1 mb-1 rounded-md outline-green-100 ' type='email' placeholder='Enter email'/>
                    <button className=' subscribe-btn py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer