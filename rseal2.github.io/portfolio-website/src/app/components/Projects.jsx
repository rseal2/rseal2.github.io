"use client";

import React, { useState } from "react";
import Card from "./Card";
import Modal from "./ProjModal";

const projectsData = [
  {
    id: 1,
    title: "Seekr",
    timeline: "HackMidwest 2024",
    description: "Seekr is a scavenger hunt mobile app that gives users daily items to find and snap pictures of. It uses object detection and machine learning to determine whether the photo matches the item. This project won HackMidwest's Pinata AI Challenge for $2,500!",
    skills: ["JavaScript", "React Native", "Python", "Flask", "Firebase", "AWS", "Pinata API", "Gemini API", "Vision API", "Expo"],
    image: "images/projects_imgs/seekr.png",
  },
  {
    id: 2,
    title: "Qwirkle",
    timeline: "Spring 2024",
    description: "Qwirkle is a tile-based game that challenges players to create lines by matching either the color or shape of the tiles. This project was developed as part of a team for a Software Engineering course.",
    skills: ["JavaScript", "HTML/CSS", "Jest", "Vue", "Python", "Flask", "Firebase", "Socket.IO"],
    image: "images/projects_imgs/qwirkle.png",
  },
  {
    id: 3,
    title: "Gig Scheduler",
    timeline: "Spring 2023",
    description: "Gig Scheduler is a program that allows musicians to schedule gigs and manage their availability. This project was developed as a final project for a Computer Science course.",
    skills: ["Java", "SQL"],
    image: "images/projects_imgs/gigscheduler.png",
  },
  {
    id: 4,
    title: "Cumulate",
    timeline: "Fall 2022",
    description: "Cumulate is a web application prototype developed during a mock-startup class called Innovation Processes. The app aims to connect teachers across schools and districts, enabling them to share educational materials and resources. It addresses disparities in access to quality teaching tools caused by funding limitations.",
    skills: ["Figma"],
    image: "images/projects_imgs/cumulate.png",
  },
  {
    id: 5,
    title: "Tenaska Business Challenge",
    timeline: "Spring 2024",
    description: "Tenaska Business Challenge is a multi-university competition that challenges students to solve real problems through interdisciplinary soltuions. My team developed a solution to help Tenaska, an energy company, improve their renewable energy portfolio. We presented our solution to a panel of judges and placed 9th out of 40 student teams.",
    skills: ["Case Analysis"],
    image: "images/projects_imgs/tenaska.png",
  },
];

const Projects = () => {
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
      <h2 className="text-center text-4xl font-bold text-[#235347] mt-5 mb-5">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
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
        timeline={selectedProject?.timeline}
        description={selectedProject?.description}
        contributions={selectedProject?.contributions}
        skills={selectedProject?.skills}
      />
    </>
  );
};

export default Projects;
