import react from 'react'
import Button from './Button'
import Navbar from './Navbar'
import { useState } from 'react'

const App = ()=>{
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("Rediet");
  function handleClick() {
    setNumber(number + 1)
    setName("Amerti");
  }

const names=["Red", "Amo","Fen","Riri","Gela"]
 
  
  return(
    <div className='h-screen'>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <Navbar/>
         
      <button onClick={handleClick} className='bg-blue-600 flex flex-col items-center justify-center'>click here</button>
      <p>{number}</p>
      <p>{name}</p>
      
     
 
        <Button friendsName={names}></Button>
       



    </div>
  )
}

export default App