import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [customerData,setcustomerData]=useState({
    name:"",
    password:""
  })
  console.log("customerData",customerData)
  function submitHandle(e:any){
    
    e.preventDefault()
    // setcustomerData({...customerData,[e.target.name]:e.target.value})
  }
  return (
    <>
        <h1>Hii Guys</h1>

        <form style={{border:"1px solid", padding:"10px"}} onSubmit={submitHandle}>
          <div style={{textAlign:"justify"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
           <label>Name</label>
           <input type='text' placeholder='enter name' name="name" onChange={(e)=>setcustomerData({...customerData,[e.target.name]:e.target.value})}/> 
           </div>
           <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
            <label>Password</label>
            <input type='password' name="password" onChange={(e)=>setcustomerData({...customerData,[e.target.name]:e.target.value})}/>
           </div>
           <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
            <button style={{border:"none", backgroundColor:"blue",color:"white", textAlign:"center", margin:"auto"}} type='submit'>Submit</button>
           </div>
           </div>

        </form>
    </>
  )
}

export default App
