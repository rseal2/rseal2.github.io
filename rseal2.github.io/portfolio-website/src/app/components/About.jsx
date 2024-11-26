"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Vue",
      "Flask",
      "Firebase",
      "AWS",
      "SQL",
      "Figma",
    ],
  },
  {
    title: "Coursework",
    id: "coursework",
    content: ["Software Engineering", "Data Structures & Algorithms", "Computer Problems", "UNIX Programming", "Data & Models", "Automata", "Operating Systems Principles", "Calculus I-III", "Linear Algebra", "Differential Equations"],
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
<section className="text-white">
  <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <div className="flex justify-center items-center h-[500px]"> {/* Set a fixed height for the image container */}
      <Image
        className="ml-[-50px] max-w-[700px] w-full h-auto object-contain"
        src="/images/trees.png"
        alt="Trees"
        width={700}
        height={500}
      />
    </div>
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-5xl font-bold text-[#235347] mb-4">ABOUT ME</h2>
      <p className="text-xl">
            {" "}
            I am a junior at the University of Nebraska-Lincoln studying
            Computer Science with minors in Mathematics and Business Management.
            I am passionate about software development and am always looking for
            opportunities to learn and grow!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("coursework")}
              active={tab === "coursework"}
            >
              {" "}
              Relevant Coursework{" "}
            </TabButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {TAB_DATA.find((t) => t.id === tab).content.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#235347] rounded text-white font-bold mr-4 mb-2"
              >
                {item}
              </span>
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default About;
