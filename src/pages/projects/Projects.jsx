import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  componentDidMount() {
    document.title = "Projects";
  }

  render() {
    return (
      <div className="container bg-dark p-4">
        <h3 className="text-light">Projects</h3>
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    );
  }
}

export default Projects;
