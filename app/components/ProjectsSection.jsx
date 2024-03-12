"use client";
import React from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [Tag, setTag] = React.useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(Tag); // Added return statement here
  });

  // ... rest of your code ...

  return (
    <>
      <div>
        <h1 className=" text-center text-6xl mb-6">My Projects</h1>
        <div className=" text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={Tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={Tag === "Web"}
          />{" "}
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={Tag === "Mobile"}
          />{" "}
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map(
            (
              project // Use filteredProjects here
            ) => (
              <ProjectCards
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
