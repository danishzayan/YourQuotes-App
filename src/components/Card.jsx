import React from 'react'

const Card = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className='card'>
      <span>{ text }</span>
      <div className="footer">
        <small><i className="fa-solid fa-calendar-day"></i>{ date }</small>
        <div className='footer-icon'>
        <i class="fa-sharp fa-solid fa-copy"></i>
        <i className="fa-solid fa-trash" onClick={() => handleDeleteNote(id)}></i>
        </div>
      </div>
    </div>
  )
}

export default Card