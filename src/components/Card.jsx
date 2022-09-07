import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <span>Notepad app. This is note pad....</span>
      <div className="footer">
        <small><i className="fa-solid fa-calendar-day"></i> 13/05/2022</small>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  )
}

export default Card