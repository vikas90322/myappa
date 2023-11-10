import React from 'react'
import img1 from '../images/img1.jpg'

const Footer = () => {
    const mystyle1={
        color:"blue"
    };
  return (
    <div>
       < img  src={img1} style={{width:"100%",height:"auto"}} />

       <h2 style={mystyle1}>image 123456789</h2>
    </div>
  )
}

export default Footer
