import React,{useState} from 'react'

function Pagination({pageProp,goBack,goAhead}) {
  
  return (
    <>
      <div className='w-full flex justify-center mb-8'>

        <button className='p-3 border-2 rounded-l-xl border-red-500 text-red-500' onClick={goBack}>Previous</button>

        <button className='p-3 border-t-2 border-b-2 border-red-500 text-red-500'>{pageProp}</button>

        <button className='p-3 border-2 rounded-r-xl border-red-500 text-red-500' onClick={goAhead}> Next</button>

      </div>
    </>
  )
}

export default Pagination