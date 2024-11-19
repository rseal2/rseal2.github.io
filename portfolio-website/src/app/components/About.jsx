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
    }
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
          src="/images/headshot.png"
          alt="headshot"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4"> About Me! </h2>
          <p className="text-base lg:text-lg">
            {" "}
            I am a full-stack developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I have experience working
            with a variety of technologies, including HTML, CSS, JavaScript,
            React, and Node.js. I am always looking to expand my skillset and
            learn new things.
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
              selectTab={() => handleTabChange("Relevant Coursework")}
              active={tab === "Relevant Coursework"}
            >
              {" "}
              Relevant Coursework{" "}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
