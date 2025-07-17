import React from 'react';
import './ProductModal.css';
import { Service } from '../../types';

interface ProductModalProps {
  product: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isImageIcon = product.icon.includes('.svg') || product.icon.includes('.png') || product.icon.includes('.jpg');

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            {isImageIcon ? (
              <img 
                src={product.icon} 
                alt={product.title}
                className="modal-icon-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
            ) : (
              <span className="modal-icon-emoji">{product.icon}</span>
            )}
            <span className="modal-icon-fallback" style={{ display: 'none' }}>🤖</span>
          </div>
          <h2 className="modal-title">{product.title}</h2>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{product.description}</p>
          
          <div className="modal-detailed-description">
            <h3>상세 설명</h3>
            {product.title === 'STAR-Grapher' ? (
              <div>
                <p>
                  STAR-Grapher는 BISCAT의 핵심 제품으로, 온톨로지 기반의 지능형 로봇 통합 관리 플랫폼입니다. 
                  다양한 제조업체의 로봇과 센서를 하나의 통합된 시스템에서 관리할 수 있어, 
                  기존의 복잡한 로봇 운영 체계를 혁신적으로 단순화합니다.
                </p>
                <h4>주요 기능</h4>
                <ul>
                  <li><strong>통합 관리 대시보드:</strong> 모든 로봇과 센서의 상태를 한눈에 확인</li>
                  <li><strong>실시간 모니터링:</strong> 작업 진행 상황과 성능 지표를 실시간으로 추적</li>
                  <li><strong>지능형 작업 계획:</strong> AI 기반의 최적화된 작업 스케줄링</li>
                  <li><strong>자동화 워크플로우:</strong> 복잡한 작업을 자동화된 프로세스로 구성</li>
                </ul>
                <h4>기술적 특징</h4>
                <ul>
                  <li>온톨로지 기반 데이터 모델링으로 확장성과 유연성 보장</li>
                  <li>다양한 로봇 프로토콜 지원 (ROS, OPC-UA, Modbus 등)</li>
                  <li>클라우드 및 온프레미스 배포 가능</li>
                  <li>RESTful API를 통한 외부 시스템 연동</li>
                </ul>
              </div>
            ) : (
              <div>
                <p>
                  STAR는 누구나 쉽게 로봇을 제어할 수 있도록 설계된 자연어 기반 인터페이스 솔루션입니다. 
                  복잡한 프로그래밍 지식 없이도 일상 언어로 로봇에게 명령을 내릴 수 있어, 
                  로봇 기술의 접근성을 혁신적으로 향상시킵니다.
                </p>
                <h4>주요 기능</h4>
                <ul>
                  <li><strong>자연어 처리:</strong> 한국어, 영어 등 다국어 음성 및 텍스트 명령 이해</li>
                  <li><strong>직관적 인터페이스:</strong> 터치스크린, 음성, 제스처를 통한 다양한 입력 방식</li>
                  <li><strong>음성 인식:</strong> 노이즈 환경에서도 정확한 음성 명령 인식</li>
                  <li><strong>스마트 제어:</strong> 상황에 맞는 지능적인 로봇 제어</li>
                </ul>
                <h4>기술적 특징</h4>
                <ul>
                  <li>대화형 AI 엔진으로 자연스러운 의사소통</li>
                  <li>머신러닝 기반 의도 파악 및 명령 해석</li>
                  <li>실시간 음성 처리 및 응답</li>
                  <li>다양한 디바이스와 플랫폼 지원</li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="modal-features">
            <h3>핵심 특징</h3>
            <div className="features-grid">
              {product.features.map((feature, index) => (
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

export default ProductModal;
