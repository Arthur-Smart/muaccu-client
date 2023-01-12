import React, {useState} from 'react'
import Tab from '../tab/Tab'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const [showRegisterForm, setShowRegisterForm] = useState(false)
  return (
    <div className='navbar flex flex-col items-center justify-center'>
        <div className='container flex items-center justify-center top-nav'>
            <p className='text-gray-600 font-black text-xl'>MOI UNIVERSITY ANNEX CAMPUS CHRISTIAN UNION</p>
        </div>

        <div className='container py-4 flex items-center justify-between bottom-nav'>
            <div className='logo cursor-pointer'>
                <img src={require('../../assets/logo.jpg')} alt=''/>
            </div>
            <div className='nav-links  flex items-center justify-between'>
                <Link to='/'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Home</p></Link>
                <Link to='/about'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >About</p></Link>
                <Link to='/ministries'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Ministries</p></Link>
                <Link to='/events'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Events</p></Link>
                <Link to='/contact'><p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Contact</p></Link>
                <div className='nav-blog'>
                    <p className='font-semibold text-gray-600 cursor-pointer hover:text-green-700 ' >Blog <i class="fa-solid fa-chevron-down"></i></p>
                    <div className='blog-links  p-2'>
                        <div className='blog-links-wrapper border-2 rounded-md p-2'>
                            <Link to='/article'><p className='text-gray-600 cursor-pointer hover:text-green-700 mb-4' >Written articles</p></Link>
                            <Link to='/videos'><p className='text-gray-600 cursor-pointer hover:text-green-700 ' >Video articles</p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-btns flex items-cemter justify-around'>
                <button onClick={() => setShowRegisterForm(true)} className='py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md'>Register</button>
                <button className='border-2 py-2 px-4 rounded-md hover:bg-green-700 hover:text-white'>Admin</button>
            </div>
        </div>
        {showRegisterForm && (
            <div className='register-form flex items-center justify-center'>
            <div className='form-wrapper flex flex-col items-center justify-center rounded-md'>
                 <p onClick={() => setShowRegisterForm(false)}  className='text-red-700 cursor-pointer text-2xl'><i class="fa-solid fa-circle-xmark"></i></p>
                 <p className='font-semibold text-xl text-slate-600 text-center'>It's great to have you on board  please register with us</p>
                 <Tab/>
                 <div className='form-inputs flex flex-col items-center p-4'>
                    <input className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x1F464; Enter full name"/>
                    <input className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x2709; Enter email"/>
                    <input className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100' type='text' placeholder="&#x1F464; Enter phone"/>
                    <select className='register-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                        <option>--Year of study--</option>
                        <option value='1.1'>Year - 1.1</option>
                        <option value='1.2'>Year - 1.2</option>
                        <option value='2.1'>Year - 2.1</option>
                        <option value='2.2'>Year - 2.2</option>
                        <option value='3.1'>Year - 3.1</option>
                        <option value='3.2'>Year - 3.2</option>
                        <option value='4.1'>Year - 4.1</option>
                        <option value='4.2'>Year - 4.2</option>
                    </select>
                    <button className='register-student-btn py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-md mt-4'>Register</button>
                 </div>
            </div>
        </div>
        )}
        
    </div>
  )
}

export default Navbar