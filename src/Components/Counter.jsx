import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const inc = () =>{
        setCount(count+1)
    }

    const dec = () => {
        if(!(count <= 0)) {
            setCount(count-1)
        }
    }

  return (
    <div className='flex items-center flex-col  justify-evenly'>
        <h1 className='text-5xl'>Counter : {count}</h1>

        <button onClick={inc} className='h-14 w-32 bg-black text-white' >Increment</button>
        <button onClick={dec} className='h-14 w-32 bg-black text-white' >Decrement</button>
        
    </div>
  )
}
