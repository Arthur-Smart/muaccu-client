import React from 'react'
import MinistryData from '../../components/ministrydata/MinistryData'
import './ministries.css'

function Ministries() {
  return (
    <div className='ministries'>
        <div className='about-top flex flex-col items-center justify-center bg-green-700'>
            <div className='container flex flex-col py-10'>
                <p className='text-white text-2xl font-bold'>Moi University Annex Campus Christian Union Ministries</p>
                <p className='text-white'>All members are warmly invited to participate in our various church ministries.</p>
                <button className='ministry-btn border-2 py-2 rounded-md text-white hover:bg-red-700 mt-1'>Join ministry</button>
            </div>
        </div>
        <MinistryData/>
    </div>
  )
}

export default Ministries