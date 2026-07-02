"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  url: string;
}

export default function ProjectList() {
  const defaultProjects: Project[] = [
    {
      id: 1,
      title: "GitHub",
      url: "https://github.com",
    },
    {
      id: 2,
      title: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      id: 3,
      title: "Portfolio",
      url: "https://example.com",
    },
  ];

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(defaultProjects);

      localStorage.setItem(
        "projects",
        JSON.stringify(defaultProjects)
      );
    }
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Projects & Social Links</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          url={project.url}
        />
      ))}
    </div>
  );
}