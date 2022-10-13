import React,{useState,useEffect} from 'react'
import Baner from '../components/Banner.jpg'
import axios from 'axios'

function Banner() {

      const [movie, setMovie] = useState({})

    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=7fc96269a1ce84e0a27e6266daa2313b").then((res)=>
        {
            console.table(res.data.results)
            setMovie(res.data.results[0]);
        }
        )
    },[]) 

  return <>
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[50vh] md:h-[90vh] bg-top bg-cover flex items-end`}>
        <div className="bg-opacity-50 border-4-4 p-2 bg-gray-700 text-3xl md-text-5xl text-white w-full flex justify-center ">
            {movie.title}
        </div>
    </div>
  </>
}

export default Banner