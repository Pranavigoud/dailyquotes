import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const App = () => {
  useEffect(()=>{
    fetchQuote()
  },[])
  const [motive,Setmotive]=useState()

  const fetchQuote = async()=>{
    try {
      const res = await axios.get('https://dummyjson.com/quotes/random')
      console.log(res);
      
      Setmotive(res.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  // fetchQuote()
  return (
    <div className='bg-neutral-200 h-[100vh] flex justify-center items-center'>
     <div className='flex flex-col text-center p-5 w-xl min-h-[30vh] h-fit bg-white rounded-4xl shadow-2xl max-lg:w-11/12'>
      <h1 className='flex justify-between text-2xl font-bold px-3'> <span className='text-neutral-800'>Daily Quotes❤️</span> <button onClick={()=>window.location.reload()} className='cursor-pointer'><FaArrowAltCircleRight/></button></h1>
      <h6 className='font-bold text-2xl text-neutral-700 pt-5'>{motive?.quote}</h6>
      <p className='pt-5'>-{motive?.author}</p>
     </div>
    </div>
  )
}

export default App