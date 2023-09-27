import React from 'react'
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Card from './Components/Card';



export default function App() {
  return (

    <>
      <Navbar/>
    
    <div className='mx-48 mt-10'>

      <h1 className='text-4xl'>All task (o task)</h1>
      <div className='view flex justify-between mt-10'></div>
      <div >
      <i class="fi fi-rr-apps m-5 text-3xl"></i>
      <i class="fi fi-sr-list m-5 text-3xl"></i>
      </div>
      <select>
        <option value="data">Date</option>
        <option value="inc">Priority</option>
        <option value="dec">Fav</option>
      </select>
      <Card/>
    </div>

    </>
  )
}

