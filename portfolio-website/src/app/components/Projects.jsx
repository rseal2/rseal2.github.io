"use client";

import React, { useState } from "react";
import Card from "./Card";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project leeeeeeeeeeeeeeeellllllllllllllllllllleeeeee",
    image: "/images/headshot.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project",
    image: "/images/headshot.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a project",
    image: "/images/headshot.png",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a project",
    image: "/images/headshot.png",
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
        P R O J E C T S
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

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#181818] p-6 rounded-lg shadow-lg w-11/12 sm:w-96 h-auto sm:h-80 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
