// File: app/page.js

"use client";

import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {

  // State Variables

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [year, setYear] = useState("");

  // Load data from localStorage

  useEffect(() => {

    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {

      setProjects(JSON.parse(savedProjects));

    }

  }, []);

  // Save data into localStorage

  useEffect(() => {

    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );

  }, [projects]);

  // Add Project

  const addProject = () => {

    if (!title || !description || !year) {

      alert("Please fill all fields");

      return;

    }

    const newProject = {

      id: Date.now(),

      title,

      description,

      year

    };

    setProjects([...projects, newProject]);

    setTitle("");

    setDescription("");

    setYear("");

  };

  // Clear Portfolio

  const clearPortfolio = () => {

    setProjects([]);

    localStorage.removeItem("projects");

  };

  return (

    <div className="container">

      <h1>Creator Portfolio</h1>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <div className="button-group">

        <button onClick={addProject}>
          Add Project
        </button>

        <button onClick={clearPortfolio}>
          Clear Portfolio
        </button>

      </div>

      {

        projects.length === 0 ?

        (

          <h2 className="empty">

            You haven't added any projects to your portfolio yet!

          </h2>

        )

        :

        (

          <div className="grid">

            {

              projects.map((project) => (

                <ProjectCard

                  key={project.id}

                  title={project.title}

                  description={project.description}

                  year={project.year}

                />

              ))

            }

          </div>

        )

      }

    </div>

  );

}