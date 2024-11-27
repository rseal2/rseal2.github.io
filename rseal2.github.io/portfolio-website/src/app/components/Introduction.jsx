"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            Hello! I&apos;m
            <span className="text-transparent bg-clip-text bg-[#235347]">
              {" "}
              Raimee Seal
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-2xl mb-6 lg:text-3xl">
            👩‍💻 I&apos;m an aspiring software engineer
          </p>
          <div>
            <Link href="https://tinyurl.com/raimeeresume">
              {" "}
              {/* Resume Button */}
              <button className="px-4 py-4 rounded-lg mr-4 bg-[#235347] hover:bg-[#08624c]">
                <img
                  src="/images/logos/resume.png"
                  className="inline-block w-8 h-8"
                  style={{
                    transform: "scale(1.2)",
                    maxWidth: "50px",
                    maxHeight: "50px",
                  }}
                />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/raimee-seal">
              {/* LinkedIn Button */}
              <button className="px-4 py-4 rounded-lg mr-4 bg-[#235347] hover:bg-[#08624c]">
                <img
                  src="/images/logos/linkedin.png"
                  className="inline-block w-8 h-8"
                  style={{
                    transform: "scale(1.2)",
                    maxWidth: "50px",
                    maxHeight: "50px",
                  }}
                />
              </button>
            </Link>
            <Link href="https://github.com/rseal2">
              {" "}
              {/* GitHub Button */}
              <button className="px-4 py-4 rounded-lg mr-4 bg-[#235347] hover:bg-[#08624c]">
                <img
                  src="/images/logos/github.png"
                  className="inline-block w-8 h-8"
                  style={{
                    transform: "scale(1.5)",
                    maxWidth: "50px",
                    maxHeight: "50px",
                  }}
                />
              </button>
            </Link>
            {/* Email Button */}
            <button
              onClick={() => {
                window.location.href = "mailto:raimseal@gmail.com";
              }}
              className="px-4 py-4 rounded-lg mr-4 bg-[#235347] hover:bg-[#08624c]"
            >
              <img
                src="/images/logos/email.png"
                className="inline-block w-8 h-8"
                style={{
                  transform: "scale(1.1)",
                  maxWidth: "50px",
                  maxHeight: "50px",
                }}
              />
            </button>{" "}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-lg bg-[#181818] w-[350px] h-[300px] relative lg:w-[400px] lg:h-[300px] flex items-center justify-center">
            <Image
              src="/images/headshot.png"
              alt="headshot"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
