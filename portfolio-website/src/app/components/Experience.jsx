"use client"

import React, { useState } from "react";
import Card from "./Card";
import Modal from "./ExpModal";

const experienceData = [
  {
    id: 1,
    title: "brAIn rot",
    role: "Software Engineer",
    timeline: "August 2024 - Present",
    description:
      "brAIn rot is a platform designed for developers to create, compare, and visualize algorithms & machine learning models on popular strategy games.",
    contributions: [
      "Utilized React.js, HTML, and CSS to develop a web app that allows users to create machine learning models for popular strategy games.",
      "Created designs for contests, LinkedIn posts, and internal projects.",
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind", "Firebase"],
    image: "/images/experience_imgs/brainrot.png",
  },
  {
    id: 2,
    title: "Hudl",
    role: "Software Engineer Intern",
    timeline: "May 2024 - August 2024",
    description:
      "Hudl is a sports-focused software company that helps any team capture, analyze, and share video and data faster and more effectively. I was on a squad that was responsible for integrating guardian user workflows onto the platform.",
    contributions: [
      "Implemented new user interface designs with React.js, improving user engagement by 20%",
      "Optimized C# .NET backend processes, decreasing load times by 30% and increasing application performance efficiency by 25%.",
      "Integrated message filtering on Hudl microservices using AWS, reducing SQS costs by 188K/year.",
    ],
    skills: ["React", "TypeScript", "Jest", "C# .NET", "AWS"],
    image: "/images/experience_imgs/hudl.png",
  },
  {
    id: 3,
    title: "Shyft Solutions",
    role: "Software Engineer Intern",
    timeline: "April 2023 - November 2023",
    description:
      "Shyft Solutions LLC is an IT services and consulting company with a focus on weather data analytics and visualization. Shyft also works with the US Air Force TADS weather sustainment program to provide services assisting with data processing.",
    contributions: [
      "Migrated monolith to a containerized microservice architecture using Kubernetes, resulting in a performance increase of over 150%.",
      "Developed data processing pipelines to parse raw weather data, perform quality checks, and generate API responses with Python.",
      "Created a specialized math library to transform and analyze weather data, improving data processing efficiency by 20%.",
      "Wrote unit tests and maximized SonarQube code coverage to assure quality throughout the development process.",
    ],
    skills: ["Python", "Java", "Kubernetes", "Docker"],
    image: "/images/experience_imgs/shyftsolutions.png",
  },
  {
    id: 4,
    title: "UNL Economics Department",
    role: "Research Assistant",
    timeline: "April 2024 - November 2024",
    description: "This is a project",
    contributions: [
      "Extracted and synthesized data with R to analyze the impact of early education on children from low-income families.",
      "Conducted a literature review on the influence of parenthood on workplace flexibility and the firms’ roles in this dynamic.",
    ],
    skills: ["Python", "R"],
    image: "/images/experience_imgs/econ.png",
  },
  {
    id: 5,
    title: "Raikes School of Computer Science & Management",
    role: "Innovation Processes Teaching Assistant",
    timeline: "August 2023 - December 2023",
    description:
      "Innovation Processes is a course designed to teach students how to develop a start-up mindset and create a project that solves a real-world problem.",
    contributions: [
      "Mentored a cohort of 40 students through the product development process, beginning with problem identification to solution implementation.",
      "Evaluated customer interviews, prototypes, and iterations based on design feedback and business models.",
      "Guided students through the use of Figma to create wireframes and prototypes for their projects.",
    ],
    skills: ["Figma"],
    image: "/images/experience_imgs/raikes.png",
  },
  {
    id: 6,
    title: "Nebraska Realty",
    role: "Marketing Assistant",
    timeline: "June 2021 - August 2022",
    description:
      "Nebraska Realty is the largest independent real estate company in Nebraska and Southwest Iowa. They are dedicated to providing a variety of real estate services to their clients.",
    contributions: [
      "Analyzed data by cross-referencing databases to improve realtor efficiency by 100%. ",
      "Assisted with house tours and facilitated client interactions, resulting in a 30% increase in client retention.",
      "Helped organize social events for Nebraska Realty to increase brand awareness and client engagement.",
    ],
    skills: ["Microsoft Office Suite"],
    image: "/images/experience_imgs/nebrealty.png",
  },
  {
    id: 7,
    title: "University of Nebraska Medical Center",
    role: "Research Assistant",
    timeline: "June 2021 - August 2021",
    description:
      "I worked with the Water, Climate, and Health Program through UNMC. The program's mission is to pioneer interdisciplinary research, education and collaborative solutions to public health challenges associated with drinking water quality and climate change in Nebraska and around the world. I worked under the guidance of Dr. Jesse Bell, who is the director of the program, and Dr. Azar Abadi, an assistant professor in the department of Environmental, Agricultural, and Occupational Health.",
    contributions: [
      "Analyzed data from different counties in Nebraska to draw conclusions about what variables result in poor water quality.",
      "Learned how to interpret satellite images and topographical maps to assess the impacts of water quality in Nebraska.",
      "Presented findings to the program director and other research assistants to increase awareness about the study.",
    ],
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
        timeline={selectedProject?.timeline}
        description={selectedProject?.description}
        contributions={selectedProject?.contributions}
        skills={selectedProject?.skills}
      />
    </>
  );
};

export default Experience;
