import React, { useEffect } from 'react';
import './ProductModal.css';
import { Service } from '../../types';

interface ProductModalProps {
  product: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  // 팝업이 열릴 때 백그라운드 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
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
                  STAR-Grapher는 시공간 온톨로지 기반의 차세대 로봇 지능 플랫폼으로, 
                  제조·물류 산업의 디지털 트윈 환경에서 다종 로봇의 통합 관리와 최적화를 실현합니다. 
                  복잡한 산업 현장의 로봇 운영을 지능적으로 자동화하여 생산성과 효율성을 극대화합니다.
                </p>
                <h4>핵심 기능</h4>
                <ul>
                  <li><strong>시공간 온톨로지 엔진 :</strong> 로봇, 환경, 작업의 시공간 관계를 지능적으로 모델링</li>
                  <li><strong>디지털 트윈 시뮬레이션 :</strong> 실제 작업 환경을 가상으로 구현하여 최적 경로 계산</li>
                  <li><strong>이기종 로봇 통합 제어 :</strong> 산업용 로봇, AGV/AMR 등 이기종 로봇의 협업 조율</li>
                  <li><strong>지능형 작업 스케줄링 :</strong> AI 기반 최적화 알고리즘으로 작업 효율성 극대화</li>
                  <li><strong>실시간 모니터링 :</strong> 전체 시스템의 상태와 성능을 실시간으로 추적 및 분석</li>
                </ul>
                <h4>고객 가치</h4>
                <ul>
                  <li>
                    <strong>로봇 작업 자동 조정</strong><br/>
                    • AI가 로봇들의 역할과 상황을 스스로 파악<br/>
                    • 운영 부담 없이, 자동화된 협업
                  </li>
                  <li>
                    <strong>상황에 맞는 유연한 대응</strong><br/>
                    • 맥락과 상황을 이해하여 불확실한 현장에서도 안정적으로 자동화
                  </li>
                  <li>
                    <strong>로봇 지식의 '시각적 구조화'</strong><br/>
                    • 사람도 쉽게 이해할 수 있게 하고 행동에 대한 신뢰를 높이고 검토 가능
                  </li>
                  <li>
                    <strong>확장성과 통합성</strong><br/>
                    • 새로운 데이터를 빠르게 연결하고 조율하여 유지보수 확장이 쉬운 시스템
                  </li>
                  <li>
                    <strong>설명 가능한 AI(Explainable AI)</strong><br/>
                    • 의사결정 근거를 추론하고 설명, 신뢰가 가능한 자율 시스템
                  </li>
                </ul>
                
                <h4>기존 시스템 vs STAR-Grapher</h4>
                <div className="comparison-section">
                  <div className="comparison-visual">
                    <img 
                      src="/assets/images/sg.jpg" 
                      alt="기존 시스템과 STAR-Grapher 비교" 
                      className="comparison-image"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p>
                  STAR(Spatial Temporal Ai for Robot)는 비스캣만의 온톨로지 기술을 활용한 
                  아이덴티티와 스킬을 가진 로봇 Software 입니다. 어떤 제조사에서 만든 로봇에도 적용이 가능하며 복잡한 프로그래밍 지식 없이도
                  환경 변화, 다양한 상황에도 유연하고 완벽하게 임무를 수행할 수 있습니다. 
                </p>
                <h4>핵심 기능</h4>
                <ul>
                  <li><strong>어떤 로봇이라도 사용 가능 :</strong> 제조사를 가리지 않고 모든 로봇에 사용이 가능합니다. </li>
                  <li><strong>STAR-Grapher+ :</strong> STAR-Grapher와 함께 사용한다면 더더욱 효과가 큽니다.</li>
                </ul>
                <h4>고객 가치</h4>
                <ul>
                  <li>다양한 작업을 하나의 시스템으로 유연하게 수행</li>
                  <li>고객 맞춤형 시나리오 대응력 강화</li>
                  <li>예외 상황과 안전 대응 능력 확보</li>
                  <li>로봇 개발 기간 및 비용 절감</li>
                  <li>지속 가능한 로봇 자동화 플랫폼 확보</li>
                </ul>
                
                <h4>기존 시스템 vs STAR</h4>
                <div className="comparison-section">
                  <div className="comparison-visual">
                    <img 
                      src="/assets/images/s.jpg" 
                      alt="STAR 시스템 비교" 
                      className="comparison-image"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {product.title === 'STAR-Grapher' && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
