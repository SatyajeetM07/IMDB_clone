// rfce
import React from 'react'
import Logo1 from "../components/film_logo.png"
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div class="border items-center py-4 flex space-x-8 px-8 ">

        <img class="h-8 md:h-12 " src={Logo1}></img>
        <Link to="/Movies" className="text-red-500 font-bold text-xl md:text-3xl">Movies</Link>
        <Link to="/favourites" className="text-red-500 font-bold text-xl md:text-3xl">Favourites</Link>
    </div>
   
    </>
  )
}

export default Navbar