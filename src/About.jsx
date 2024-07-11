import React, { useState } from "react";
// import myselfAtWork from "../assets/myself_at_work.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src='' alt="Myself at work" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-3xl font-semibold mb-4">About Me</h1>
          <p className="mb-4">
            I am a software engineer at your service. I hold a masters degree in software engineering and deal with web design, networking, and software development.
          </p>
          <div className="tabs">
            <div className="flex space-x-4 mb-4">
              <button
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => openTab("skills")}
              >
                Skills
              </button>
              <button
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => openTab("experience")}
              >
                Experience
              </button>
              <button
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => openTab("education")}
              >
                Education
              </button>
            </div>
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul className="list-disc ml-5">
                <li><span className="font-semibold">UI/UX:</span> Designing Web/App interfaces</li>
                <li><span className="font-semibold">Web Development:</span> Web app Development</li>
                <li><span className="font-semibold">App Development:</span> Building Android/IOS apps</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              <ul className="list-disc ml-5">
                <li><span className="font-semibold">2021-current:</span> UI/UX Design Training at Zindua School.</li>
                <li><span className="font-semibold">2000-2003:</span> Team leader at Safaricom Kenya Ltd.</li>
                <li><span className="font-semibold">2017-2019:</span> Internship at Royal Media Services.</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              <ul className="list-disc ml-5">
                <li><span className="font-semibold">2011-2013:</span> Teacher Training at St. Augustine Eregi TTC.</li>
                <li><span className="font-semibold">2000-2003:</span> St. Paul's Boys High School.</li>
                <li><span className="font-semibold">2005-2007:</span> Diploma in Electrical Engineering - RVTTI.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
