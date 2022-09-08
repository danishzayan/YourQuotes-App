import React from 'react'

const Card = ({ id, text, date }) => {
  return (
    <div className='card'>
      <span>{ text }</span>
      <div className="footer">
        <small><i className="fa-solid fa-calendar-day"></i>{ date }</small>
        <div className='footer-icon'>
        <i class="fa-sharp fa-solid fa-copy"></i>
        <i className="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  )
}

export default Card