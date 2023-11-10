import React, { useState,useEffect }  from 'react'

const Hooka = () => {
    const[count,setCount]=useState(0);
    // console.log("click on count : "+count)
    console.log(`clicked count : ${count}`);
    useEffect(()=>console.log("clicked"))

    const decrement=()=>{
        setCount(count-1);
    }
    const increment=()=>{
      setCount(count+1);
    }
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>
        
        click
      </button>
      <button onClick={increment} >
        +
      </button>
      <button onClick={decrement} >
        -
      </button>
      <h1>{count}</h1>
    </div>
  )
}

export default Hooka
