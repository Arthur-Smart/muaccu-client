import React from 'react'

function SingleOfficial() {
  return (
    <div className='leader-container rounded-md'>
        <div className='name-container bg-green-700 px-2'>
            <p className='text-white font-medium text-lg' >REV.TANUI</p>
            <p className='text-white' >CU chaplain</p>
        </div>
        <img src={require('../../assets/team.jpg')} alt=''/>                
    </div>
  )
}

export default SingleOfficial