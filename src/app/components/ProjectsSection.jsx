"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "EDA - FitBit Fitness Tracker",
    description: "Google Data Analysist Capstone Project",
    image: "/images/projects/1.png",
    tag: ["All", "Data"],
    gitUrl: "https://www.kaggle.com/code/filibertozurita/eda-bellabeat-fitbit-fitness-tracker",
    previewUrl: "https://www.kaggle.com/code/filibertozurita/eda-bellabeat-fitbit-fitness-tracker",
  },
  {
    id: 2,
    title: "EDA - Chcocolate Bars Analysis",
    description: "DataCamp Competition Project",
    image: "/images/projects/2.png",
    tag: ["All", "Data"],
    gitUrl: "https://app.datacamp.com/workspace/w/7852e580-43e6-4c2d-bb55-0564dc568b8b/edit",
    previewUrl: "https://app.datacamp.com/workspace/w/7852e580-43e6-4c2d-bb55-0564dc568b8b/edit",
  },
  {
    id: 3,
    title: "Predicting Website Views",
    description: "DataCamp Certification Project",
    image: "/images/projects/3.png",
    tag: ["All", "Data"],
    gitUrl: "https://app.datacamp.com/workspace/w/d8e33ea4-5e45-4503-9e88-d7b26120227d/edit",
    previewUrl: "https://app.datacamp.com/workspace/w/d8e33ea4-5e45-4503-9e88-d7b26120227d/edit",
  },
  {
    id: 4,
    title: "Porfolio Website - Next.js",
    description: "Dynamic Next.js Website with Tailwind CSS",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
