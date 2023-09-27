import React from 'react'

export default function Card() {
  return (
    <div className='h-64 w-80 rounded bg-white'>
        <h1>Task1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus excepturi iusto, asperiores dolorem suscipit quam autem provident sit, doloribus nobis, aspernatur odit quidem saepe eligendi quisquam! </p>
        <h2 className='mt-3'>{new Date().toLocaleDateString()}
        
        </h2>
        <div className='options'>
            <button className='h-8 e-32 bg-green-300 rounded-1xl'></button>
        </div>
    </div>
    )
}
