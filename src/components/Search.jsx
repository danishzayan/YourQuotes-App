import React from 'react'

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
       <i className="fa-solid fa-magnifying-glass"></i>
       <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder='Type to search...' />
    </div>
  )
}

export default Search