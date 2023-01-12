import React from 'react'
import SingleOfficial from '../singleofficial/SingleOfficial'
import Tab from '../tab/Tab'
import './official.css'

function Official() {
  return (
    <div className='official flex flex-col items-center justify-between py-16'>
        <p className='font-bold text-2xl text-center text-gray-600' >Meet our church official leaders</p>
        <Tab/>
        <div className='container flex flex-wrap items-center justify-center gap-3 mt-10'>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
            <SingleOfficial/>
        </div>
    </div>
  )
}

export default Official