"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills", 
        content: (
            <ul>
                <li>HTML</li>
            </ul>
        )
    }, 
    {
        title: "Coursework",
        id: "coursework", 
        content: (
            <ul>
                <li>CS1</li>
            </ul>
        )
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
        <Image
          src="/images/simba.jpeg"
          alt="simba"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#235347] mb-4"> ABOUT ME </h2>
          <p className="text-base lg:text-lg">
            {" "}
            I am a junior at the University of Nebraska-Lincoln studying Computer Science with minors in Mathematics and Business Management. 
            I am passionate about software development and am always looking for opportunities to learn and grow! 
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
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
