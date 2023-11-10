import React, { useState}  from 'react'

const Searchbar1 = () => {
    const[input,setInput]=useState("");
    const underInputchange=(event)=>{
        setInput(event.target.value);
        
    }
    console.log(input)

  return (
    <div>
     <div>
     <input type='text' value={input} onChange={underInputchange} placeholder='searching...' 
     style={{outline:'none'}} />
        <p>you typed:{input}</p>
     </div>
     
        
    </div>
  )
}

export default Searchbar1
