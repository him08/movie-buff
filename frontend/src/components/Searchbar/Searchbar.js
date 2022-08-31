import React,{useState,useRef} from "react"
import {Link} from 'react-router-dom';
import {BsSearch } from 'react-icons/bs';
const Searchbar = () => {
  const [query, setQuery]  = useState("");
  const _ref = useRef();
  return (
    <div className="searchbar">
      <input onChange={(e)=>setQuery(e.target.value)} onKeyDown={(e)=>e.key === 'Enter' && _ref.current.click()} type="email" placeholder="Search a genre/movie" />
    <button className="btn">
    <Link ref={_ref} className="link" to={`/movies?q=${query}`}>
    <span className="search_label">Search</span> 
    <BsSearch className="search_icon" />
    </Link>
    </button>
      </div>
  )
}

export default Searchbar