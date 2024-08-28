import React from "react";
import "./About.css";
import headshot from "../images/website-headshot.png";

export default function About() {
  return (
    <section id="about">
        <div className='textContainer'>
          <h1 >
            Hello!
          </h1>
          <h2>
            I'm Raimee Seal.
          </h2>
          <p >
            I'm a computer science student interested in full-stack development.
          </p>
        </div>
        <div >
          <img src={headshot} alt='profilePic' className='profilePicture' />  
        </div>

    </section>
  );
}