import React from 'react'
import './singleblog.css'

function SingleBlog() {
  return (
    <div className='single-blog container flex  justify-between mb-4 p-2 rounded-md'>
        <div className='single-blog-left'>
            <img className='rounded-md' src={require('../../assets/team.jpg')} alt=''/>
        </div>
        <div className='single-blog-right ml-2'>
            <p className='font-bold text-slate-600 text-lg'>Path to salvation</p>
            <p>This subheading expands upon the main theme of the blog and provides more information about the content and focus of the blog. It suggests that the blog will delve into the love and grace of God through various practices such as faith, prayer, and reading the Bible.
            You can use this subheading as a starting point and customize it to fit the specific focus and style of your blog. Other ideas for subheadings for a Christian blog could include</p>
            <button className='border-2 py-2 px-4 font-medium rounded-md hover:bg-green-700 hover:text-white'>Read more</button>
            <p className='mt-2 font-medium'>Post: 07-01-2023</p>
        </div>
    </div>
  )
}

export default SingleBlog