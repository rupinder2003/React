import { useState } from 'react'


function App() {
  const [color,setColor] = useState("pink")

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border border-b-red-950' style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={()=> setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-amber-400' style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
          onClick={()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-b-blue-950' style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
          onClick={()=> setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-b-emerald-500' style={{backgroundColor:"green"}}
          >Green</button>
          <button
          onClick={()=> setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-b-pink-500' style={{backgroundColor:"pink"}}
          >Pink</button>
          <button
          onClick={()=> setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-b-purple-600' style={{backgroundColor:"purple"}}
          >Purple</button>
          <button
          onClick={()=> setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-white' style={{backgroundColor:"black"}}
          >Black</button>
          <button
          onClick={()=> setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-b-fuchsia-400'  style={{backgroundColor:"lavender"}}
          >Lavender</button>
          <button
          onClick={()=> setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-amber-600 ' style={{backgroundColor:"orange"}}
          >Orange</button>
          <button
          onClick={()=> setColor("brown")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-amber-900' style={{backgroundColor:"brown"}}
          >Brown</button>
        </div>
      </div>
    </div>
      
   
  )
}

export default App
