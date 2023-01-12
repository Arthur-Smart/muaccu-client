import React from 'react'
import Tab from '../tab/Tab'
import './biblestudy.css'

function BibleStudy() {
  return (
    <div className='biblestudy flex flex-col items-center justify-between py-10'>
    <p className='font-bold text-gray-600 text-2xl'>Register for a bible study family</p>
    <p>Engage with other in a powerful and revelatory bible study</p>
    <Tab/>
        <div className='container flex flex-col items-center justify-center py-10'>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type full name...'/>
            <input className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100 ' type='text' placeholder='Type Phone...'/>
            <select className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
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
            <select className='bible-inputs border-2 py-3 px-1 mb-2 rounded-md outline-green-100'>
                <option> --Select area--</option>
                <option value='centre A'>Centre A</option>
                <option value='jamboni'>Jamboni</option>
                <option value='mti moja'>Mti moja</option>
                <option value='mushroom'>Mushroom</option>
                <option value='accecea'>Accecea</option>
                <option value='sugunanga'>Sugunanga</option>
                <option value='centre B'>Centre B</option>
                <option value='thika road'>Thika Road</option>
                <option value='outspan'>Outspan</option>
            </select>
            <button className='reg-btn font-medium border-2 py-2 px-4 text-white rounded-md bg-green-700 hover:bg-green-800'>Register</button>
        </div>
    </div>
  )
}

export default BibleStudy