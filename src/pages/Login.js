import React, { useState } from "react";
import "../Stylesa/Register.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    gender: "",
  });
  const underChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };
  const underSubmit = (e) => {
    e.preventDefault();
    console.log("Formdata :", formData);
    
    navigate("/Formdata", { state: { SubmitedData: formData } });
    document.getElementById("registerpagecontainer").style.display = "none";
    document.getElementById("mobile-container").style.display = "block";
  };
  const mobilea = {
    display: "none",
    width: "20em",
    height: "25em",
  };

  return (
    <div className="registerpagecontainer">
      <form onSubmit={underSubmit} id="registerpagecontainer">
        <div>
          <div>
            <h2>Register Form</h2>
          </div>
          <div>
            <label htmlFor="FistName">FirstName</label> <br />
            <input
              type="text"
              name="FirstName"
              onChange={underChange}
              value={formData.FirstName}
              id="FirstName"
            />
          </div>
          <div>
            <label htmlFor="LastName">LastName</label> <br />
            <input
              type="text"
              name="LastName"
              onChange={underChange}
              value={formData.LastName}
              id="LastName"
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label> <br />{" "}
            <input
              type="email"
              name="Email"
              onChange={underChange}
              value={formData.Email}
              id="Email"
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <br />
            <input
              type="password"
              name="Password"
              onChange={underChange}
              value={formData.Password}
              id="Password"
            />
          </div>
          <div>
            <label htmlFor="male">Male</label>{" "}
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={underChange}
            />
            <label htmlFor="female">Female</label>{" "}
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={underChange}
            />
          </div>
          <div>
            <button type="submit" onClick={underSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>

      <div id="mobile-container" style={mobilea}>
        <p>
          FirstName : {formData.FirstName} <br />
          LastName : {formData.LastName} <br />
          Email : {formData.Email} <br />
          Password : {formData.Password} <br />
          Gender : {formData.gender}
        </p>
      </div>
    </div>
  );
};

export default Login;
