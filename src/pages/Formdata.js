import React from 'react'
import { useLocation } from 'react-router-dom'
const Formdata = () => {
    const formData =useLocation().state.SubmitedData;
   
  return (
    <div>
      <h2>
        Register data
      </h2>
      <p>
      FirstName :  {formData.FirstName} <br />
      LastName :  {formData.LastName} <br />
      Email :{formData.Email} <br />
      passWord : {formData.Password} <br />
      Gender : {formData.gender} <br />

      </p>
      
    </div>
  )
}

export default Formdata
