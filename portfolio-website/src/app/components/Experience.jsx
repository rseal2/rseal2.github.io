"use client";

import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const experienceData = [
  {
    id: 1,
    title: "brAIn rot",
    role: "Software Engineer",
    description: "brAIn rot is a platform designed for developers to create, compare, and visualize algorithms & machine learning models on popular strategy games.",
    contributions: ["Placeholder"],
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind", "Firebase"],
    image: "/images/experience_imgs/brainrot.png",
  },
  {
    id: 2,
    title: "Hudl",
    role: "Software Engineer Intern",
    description: "Hudl is a sports-focused software company that helps any team capture, analyze, and share video and data faster and more effectively.",
    contributions: ["Placeholder"],  
    skills: ["React", "TypeScript", "Jest", "C# .NET", "AWS"],
    image: "/images/experience_imgs/hudl.png",
  },
  {
    id: 3,
    title: "Shyft Solutions",
    role: "Software Engineer Intern",
    description: "This is a project",
    contributions: ["Placeholder"],
    skills: ["Python", "Java", "Kubernetes", "Docker"],
    image: "/images/experience_imgs/shyftsolutions.png",
  },
  {
    id: 4,
    title: "UNL Economics Department",
    role: "Research Assistant",
    description: "This is a project",
    contributions: ["Placeholder"],  
    skills: ["Python", "R"],
    image: "/images/experience_imgs/econ.png",
  },
  {
    id: 5,
    title: "Raikes School of Computer Science & Management",
    role: "Innovation Processes Teacher's Assistant",
    description: "This is a project",
    contributions: ["Placeholder"],
    skills: ["Figma"],
    image: "/images/experience_imgs/raikes.png",
  }, 
  {
    id: 6, 
    title: "Nebraska Realty", 
    role: "Marketing Assistant",
    description: "This is a project",
    contributions: ["Placeholder"],
    skills: ["Microsoft Office Suite"],
    image: "/images/experience_imgs/nebrealty.png",
  }, 
  {
    id: 7, 
    title: "University of Nebraska Medical Center", 
    role: "Research Assistant",
    description: "This is a project",
    contributions: ["Placeholder"],
    skills: ["Technical Writing", "Microsoft Office Suite"],
    image: "/images/experience_imgs/unmc.jpg",
  },
];

const Experience = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="text-center text-5xl font-bold text-[#235347] mt-5 mb-5">
        EXPERIENCE
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {experienceData.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.title}
        role={selectedProject?.role}
        description={selectedProject?.description}
        contributions={selectedProject?.contributions}
        skills={selectedProject?.skills}
    
      />
    </>
  );
};

export default Experience;
