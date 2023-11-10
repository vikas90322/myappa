import React ,{useState}from 'react'

const Form1 = () => {
    const[formData,setFormdata]=useState({
        FirstName:"",
        LastName:"",
        Email:"",

    });
    const underChange=(e)=>{
        const{name,value}=e.target;
        setFormdata({
            ...formData,
            [name]:value,
        })
    };
    const underSubmit=(e)=>{
        e.preventDefault();
        console.log("Formdata :",formData)

        // setFormdata({
        //     FirstName:"",
        //     LastName:"",
        //     Email:"",
        // });
    }
    
   
   
  return (
    <div>
      <form  onSubmit={underSubmit} >
       <label htmlFor="FistName">FirstName</label> <input type="text" name="FirstName" onChange={underChange} value={formData.FirstName} id="FirstName" />
       <label htmlFor="LastName">LastName</label> <input type="text" name="LastName"  onChange={underChange} value={formData.LastName}  id="LastName" />
       <label htmlFor="Email">Email</label>   <input type="email" name="Email"  onChange={underChange} value={formData.Email} id="Email" />
       <button type="submit">Submit</button>
       <p>
        { formData.FirstName} <br />
        {formData.LastName} <br />
       {formData.Email}
      </p>
      </form>
      
    </div>
  )
}

export default Form1
