import React, { useEffect } from 'react';
import './ProjectModal.css';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

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
            <span className="project-duration-badge">{project.duration}</span>
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
          
          <div className="modal-detailed-description">
            <h3>프로젝트 상세</h3>
            {getProjectDetails(project)}
          </div>
          
          <div className="modal-features">
            <h3>주요 특징</h3>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
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
            삼성전자의 스마트 팩토리 자동화 프로젝트는 BISCAT의 STAR-Grapher 플랫폼을 활용하여 
            기존 제조 공정을 완전히 디지털화하고 자동화한 대규모 프로젝트입니다.
          </p>
          <h4>프로젝트 성과</h4>
          <ul>
            <li>생산성 45% 향상</li>
            <li>불량률 60% 감소</li>
            <li>운영비용 30% 절감</li>
            <li>작업자 안전사고 제로</li>
          </ul>
          <h4>적용 기술</h4>
          <ul>
            <li>온톨로지 기반 로봇 통합 관리 시스템</li>
            <li>AI 기반 품질 관리 및 예측 분석</li>
            <li>실시간 데이터 수집 및 모니터링</li>
            <li>디지털 트윈 기반 시뮬레이션</li>
          </ul>
        </div>
      );
    case 2: // 물류창고
      return (
        <div>
          <p>
            CJ대한통운의 물류창고에 STAR 인터페이스를 도입하여 작업자들이 음성 명령만으로 
            로봇을 제어할 수 있는 혁신적인 물류 자동화 시스템을 구축했습니다.
          </p>
          <h4>프로젝트 성과</h4>
          <ul>
            <li>처리 속도 60% 향상</li>
            <li>분류 정확도 99.8% 달성</li>
            <li>인력 운영비 40% 절감</li>
            <li>작업 효율성 50% 개선</li>
          </ul>
          <h4>적용 기술</h4>
          <ul>
            <li>자연어 기반 로봇 제어 시스템</li>
            <li>AI 기반 자동 분류 및 경로 최적화</li>
            <li>실시간 재고 관리 시스템</li>
            <li>음성 인식 및 처리 기술</li>
          </ul>
        </div>
      );
    case 3: // 병원 서비스
      return (
        <div>
          <p>
            서울대병원에 도입된 지능형 서비스 로봇은 의료진의 업무 효율성을 높이고 
            환자들에게 더 나은 의료 서비스를 제공하기 위해 개발되었습니다.
          </p>
          <h4>프로젝트 성과</h4>
          <ul>
            <li>의료진 업무 효율 35% 향상</li>
            <li>환자 만족도 90% 이상</li>
            <li>감염 위험 70% 감소</li>
            <li>응급 대응 시간 50% 단축</li>
          </ul>
          <h4>적용 기술</h4>
          <ul>
            <li>의료 환경 특화 로봇 시스템</li>
            <li>감염 방지 및 멸균 기술</li>
            <li>환자 안내 및 길찾기 AI</li>
            <li>응급 상황 감지 및 알림 시스템</li>
          </ul>
        </div>
      );
    case 4: // 교육용 로봇
      return (
        <div>
          <p>
            한국과학기술원과 함께 개발한 교육용 로봇 플랫폼은 학생들이 로봇공학과 
            AI 기술을 직접 체험하고 학습할 수 있는 혁신적인 교육 도구입니다.
          </p>
          <h4>프로젝트 성과</h4>
          <ul>
            <li>학습 참여도 80% 증가</li>
            <li>프로그래밍 이해도 70% 향상</li>
            <li>창의적 문제해결 능력 개발</li>
            <li>협업 능력 강화</li>
          </ul>
          <h4>적용 기술</h4>
          <ul>
            <li>교육용 로봇 프로그래밍 인터페이스</li>
            <li>프로젝트 기반 학습 플랫폼</li>
            <li>실시간 협업 도구</li>
            <li>학습 성과 분석 시스템</li>
          </ul>
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
