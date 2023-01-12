import React from 'react'
import Tab from '../tab/Tab'
import SingleBlog from '../singleblog/SingleBlog'
import './blogs.css'

function Blogs() {
  return (
    <div className='blogs flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-gray-600 text-2xl'>Uplifting articles for your day to day spiritual life</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-7'>
            <SingleBlog/>
            <SingleBlog/>
            <SingleBlog/>
            <SingleBlog/>
        </div>
    </div>
  )
}

export default Blogs