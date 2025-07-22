import React, { useEffect } from 'react';
import './ProjectModal.css';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

// 유튜브 ID 추출 함수
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// 유튜브 임베드 컴포넌트
const YouTubeEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => {
  return (
    <div className="youtube-container">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ 
          borderRadius: '10px', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' 
        }}
      />
    </div>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isImageIcon = project.icon.includes('.svg') || project.icon.includes('.png') || project.icon.includes('.jpg');

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <div className="modal-icon" data-project-id={project.id}>
            {/* 추후 이미지 추가 예정, 현재는 색깔로 처리 */}
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <div className="project-info">
            <span className="project-category-badge">{project.category}</span>
          </div>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{project.description}</p>
          
          {project.client && (
            <div className="client-section">
              <h3>클라이언트</h3>
              <div className="client-info">
                <span className="client-name-large">{project.client}</span>
              </div>
            </div>
          )}
          
          {project.id === 2 && (
            <div className="project-detail-image">
              <img 
                src="/assets/images/proj2_detail.jpg" 
                alt="공장 로봇 프로젝트 상세 이미지"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '10px', 
                  marginBottom: '20px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          )}
          
          <div className="modal-detailed-description">
            <h3>프로젝트 상세</h3>
            {getProjectDetails(project)}
          </div>
        </div>
      </div>
    </div>
  );
};

const getProjectDetails = (project: Project) => {
  switch (project.id) {
    case 1: // 스마트 팩토리
      return (
        <div>
          <p>
            코가로보틱스의 주력 상품인 서빙로봇 서빙고(Servinngo)의 주행 S/W CoNA를 개발했고, 서빙고 클래식, 미니, 프라임 등의 제품화 및 양산을 경험하였습니다.
          </p>
          <h4>코가로보틱스 개발건</h4>
          <ul>
            <li>서빙고 GUI 개발</li>
            <li>통합 ACS 개발</li>
            <li>SLAM MAP EDITOR 개발</li>
            <li>WCMS 개발</li>
            <li>각종 디자인업무 수행(팜플렛, 브로슈어, 영상편집, 3D MODELING 등)</li>
          </ul>
          
          <div className="project-video-section">
            <h4>프로젝트 영상</h4>
            <div className="video-container">
              <YouTubeEmbed 
                videoId="qFLs1KiI1ac"
                title="서빙로봇 서빙고 프로젝트 영상"
              />
            </div>
          </div>
        </div>
      );
    case 2: // 물류창고
      return (
        <div>
          <p>
            S사 베트남 공장에 제조/물류 라인에 AMR을 공급하고, S/W를 적용하였습니다.
          </p>
          <h4>프로젝트 R&R</h4>
          <ul>
            <li>주행 S/W Core 개발</li>
            <li>AMR GUI 개발</li>
            <li>정기적 유지/보수</li>
          </ul>
        </div>
      );
    case 3: // 병원 서비스
      return (
        <div>
          <p>
            (주)수성운반기계와 협업하여 군부대내 식자재 물류 대차(자동/수동 주행)에 적용하였습니다.
          </p>
          
          <div className="project-video-section">
            <h4>프로젝트 영상</h4>
            <div className="video-container">
              <YouTubeEmbed 
                videoId="hI_cnOGJ1QQ"
                title="군부대 식자재 물류 대차 프로젝트 영상"
              />
            </div>
          </div>
        </div>
      );
    case 4: // 교육용 로봇
      return (
        <div>
          <p>
            로봇 제조사인 CA SYSTEM과 여러 프로젝트를 진행하고 있습니다.
          </p>
        </div>
      );
    case 5: // Smart Chair
      return (
        <div>
          <p>
            공공시설을 이용하는 사회적 약자 및 돌봄 인력의 삶의 질을 향상시키는 서비스를 제공합니다.
          </p>
          <h4>프로젝트 개요</h4>
          <ul>
            <li>사회적 약자를 위한 스마트 의자 개발</li>
            <li>돌봄 인력 지원 시스템 구축</li>
            <li>공공시설 접근성 향상</li>
            <li>사용자 맞춤형 서비스 제공</li>
          </ul>
          <div className="project-video-section">
            <h4>프로젝트 영상</h4>
            <div className="video-container">
              <YouTubeEmbed 
                videoId="ljwdV-zb8qc"
                title="Smart Chair 프로젝트 영상"
              />
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <p>이 프로젝트는 BISCAT의 혁신적인 기술을 활용하여 성공적으로 완료되었습니다.</p>
        </div>
      );
  }
};

export default ProjectModal;
