import React, { useState } from 'react';
import './Experience.css'; 
import hudl from "../images/hudl.png";

const experiences = [
  {
    title: 'Software Engineer Intern @ Hudl',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained web applications using React and Node.js.',
    logo: hudl
  },
  {
    title: 'Frontend Developer',
    company: 'Web Solutions Inc.',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Implemented responsive web designs and optimized user interfaces.',
    logo: 'path/to/web-solutions-logo.png'
  },
  {
    title: 'Intern',
    company: 'Startup Hub',
    duration: 'Jan 2018 - May 2018',
    description: 'Assisted in developing mobile applications and performed testing.',
    logo: 'path/to/startup-hub-logo.png'
  }
];

const Modal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{experience.title}</h2>
        <h3>{experience.company}</h3>
        <p>{experience.duration}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section id="experience">
      <div className='textContainer'>
        <h2>
          Experience
        </h2> 
      </div>
      {/* {experiences.map((exp, index) => (
        <div key={index} className="experience" onClick={() => openModal(exp)}>
          <img src={exp.logo} alt={`${exp.company} logo`} className="logo" />
        </div>
      ))} */}
      {/* <Modal experience={selectedExperience} onClose={closeModal} /> */}
    </section>
  );
};

export default Experience;