import React, { useState } from 'react'

const Table2 = () => {
    const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
        { id: 4, name: 'Vikas', age: 22 },
        { id: 5, name: 'Balu', age: 25 },
      ]; 
      const[search,setSearch]=useState('');
      const handleInputChange=(e)=>{
        setSearch(e.target.value)
      }
     
      const fd=data.filter((items)=>{
        const itemSearched=search.toLowerCase();
        return(
       
            items.name.toLowerCase().includes(itemSearched) ||
            items.age.toString().includes(itemSearched)||
            items.id.toString().includes(itemSearched)
          
        );
      });
      const rows = fd.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ));

  return (
    <div>
       <div>
        <h1>2</h1>
        <input type="text" name="" value={search} onChange={handleInputChange} id="" />
      <h1></h1>
      <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>

    </div>
  )
}

export default Table2
