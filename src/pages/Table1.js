import React from 'react'

const Table1 = () => {
    const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
        { id: 4, name: 'Vikas', age: 22 },
        { id: 5, name: 'Balu', age: 25 },
      ];

  return (
    <div>
       <div>
        <h1>3</h1>
      <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((da) => (
          <tr key={da.id}>
            <td>{da.name}</td>
            <td>{da.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    </div>
  )
}

export default Table1
