import React from 'react'
import "./Write.css"
import Sidebar from '../../components/Sidebar/Sidebar'

const Write = () => {
  return (
    <div className='write'>
      <Sidebar />
      <div className='write-container'>
        <textarea className='write-textarea' placeholder='Write something...'></textarea>
      </div>
    </div>
  )
}

export default Write