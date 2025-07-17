import React from 'react';
import './ProjectCard.css';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-image" data-bg={project.id}>
      </div>
      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-client">{project.client}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
