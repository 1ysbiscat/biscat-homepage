import React from 'react';
import './ProjectCard.css';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" data-project-id={project.id} onClick={onClick}>
      <div className="project-card-image">
        <img 
          src={project.icon} 
          alt={project.title}
          className="project-image"
          onError={(e) => {
            // 이미지 로드 실패 시 기본 처리
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
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
