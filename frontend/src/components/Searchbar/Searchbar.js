import React from "react"
import {BsSearch } from 'react-icons/bs';
const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="email" placeholder="Search a movie" />
      <button className="btn"><span className="search_label">Search</span> <BsSearch className="search_icon" /></button>
    </div>
  )
}

export default Searchbar
