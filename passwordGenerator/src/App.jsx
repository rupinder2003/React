import { useState,useCallback ,useEffect,useRef} from 'react'
// import './App.css'

function App() {
const[length,setLength] = useState(8)
const[numberAllowed, setNumberAllowed]= useState(false)
const[charAllowed, setCharAllowed] =useState(false)
const[password, setPassword] =useState("")

// use ref hook
const passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)
},[password])

const passwordGenertor = useCallback(()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed){
    str+="0123456789"
  }
  if(charAllowed){
    str+="!@#$%^&*=+-_"
  }

  for(let i =1; i<=length; i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
  }

  setPassword(pass)

}, [length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
  passwordGenertor()
},[length,numberAllowed,charAllowed,passwordGenertor])

  return (
    <>
     {/* <h1 className='text-4xl text-center text-white'>PASSWORD GENERATOR</h1> */}
  <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-6 my-12 bg-gradient-to-r from-pink-300 to-pink-200">
  <h1 className="text-white text-2xl font-bold text-center mb-4 drop-shadow"> Password Generator</h1>
  
  <div  className="flex items-center bg-white rounded-xl shadow-inner px-2 py-1">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-3 px-4 text-lg text-pink-600 placeholder-pink-400"
      placeholder="Generated Password"
      readOnly
      ref={passwordRef}
    />
    <button
    onClick={copyPasswordToClipboard}
     className="ml-2 px-4 py-2 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-all duration-200 whitespace-nowrap">
  Copy
</button>
  </div>
  <div className='text-sm flex gap-x-2 mt-5  '>
    <div className='flex items-center gap-x-1 '>
      <input
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) =>{setLength(e.target.value)}}
      />
      <label className="cursor-pointer text-lg font-medium text-pink-800">length:{length} </label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
    type='checkbox'
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={()=>{
      setNumberAllowed((prev) => !prev);
    }}
    />
    <label htmlFor='numberInput'className="cursor-pointer text-lg font-medium text-pink-800">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input
      type='checkbox'
      defaultChecked={charAllowed}
      id='characterInput'
      onChange={()=>{
        setCharAllowed((prev) => !prev);
      }}
      />
      <label htmlFor='characterInput' className="cursor-pointer text-lg font-medium text-pink-800">
      Characters
      </label>
    </div>
  </div>
  </div>
    </>
  )
}

export default App
