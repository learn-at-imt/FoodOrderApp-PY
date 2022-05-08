import React from 'react'
import AboutImage from "../assets/masala.jpg";
import "../styles/About.css"

const About = () => {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})`}}>
       
        </div>
        <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, modi animi. Voluptas doloribus adipisci, nesciunt magni numquam sunt nam sequi dicta vel delectus? Saepe, quis eius illum quaerat corporis explicabo molestiae omnis recusandae dicta facere facilis excepturi cum, earum dolorum nam mollitia ab quam accusantium autem debitis. Architecto, reiciendis voluptatem.</p>
        </div>
    </div>
  )
}

export default About
