"use client";
import React from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "higher lower game",
    description: "Project 1 higher lower game",
    image: "/images/projects/image1.png",
    tag: ["Game", "All"],
    gitUrl: "https://github.com/Hchtsui/TeamKO.git",
    previewUrl: "https://hchtsui.github.io/Higher-lower/",
  },
  {
    id: 2,
    title: "escape room game",
    description: "project 2 escape room game",
    image: "/images/projects/image2.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Hchtsui/escape-room.git",
    previewUrl: "https://hchtsui.github.io/escape-room/",
  },
  {
    id: 3,
    title: "dashboard",
    description: "Project 3 making a dashboard about currency exchange rates",
    image: "/images/projects/image3.png",
    tag: ["All", "Web", "Game"],
    gitUrl: "https://github.com/Hchtsui/dashboard-p04-henry.git",
    previewUrl: "https://hchtsui.github.io/dashboard-p04-henry/valuta.html",
  },
  {
    id: 4,
    title: "portfolio website",
    description:
      "Project 4 this project i chose to make a portfolio website for myself",
    image: "/images/projects/image4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hchtsui/Hchtsui.github.io.git",
    previewUrl: "https://hchtsui.github.io/Themaweek2-Henry-profiel/",
  },
  {
    id: 5,
    title: "nought and crosses game",
    description: "Project 5 nought and crosses game",
    image: "/images/projects/image5.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Hchtsui/Boter-kaas-eieren.git",
    previewUrl: "https://hchtsui.github.io/Boter-kaas-eieren/",
  },
  {
    id: 6,
    title: "webcatalogue",
    description: "Project 6 webcatalogue for a school project",
    image: "/images/projects/image6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hchtsui/webcatalogus-Henry.git",
    previewUrl:
      "https://hchtsui.github.io/webcatalogus-Henry/subject-one/category-three.html",
  },
  {
    id: 7,
    title: "Shushi website",
    description:
      "Project 7 website for a sushi restaurant this code u cant see how it looks but only the code",
    image: "/images/projects/image7.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/ROCMondriaanTIN/sd22-p5-projectzuzu-Hchtsui.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "review your experience",
    description:
      "Project 8 website for a review your experience for a school project",
    image: "/images/projects/image8.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/ROCMondriaanTIN/sd22-p6-project-reviewyourexperience-henry.git",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "webshop",
    description:
      "Project 9 website selling products for clothing for a school project (currently working on it)",
    image: "/images/projects/image9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hchtsui/p7_Creative_Creativity.git",
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
            name="Game"
            isSelected={Tag === "Game"}
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
