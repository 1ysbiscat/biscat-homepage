import React from 'react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container">
        <div className="philosophy-main">
          <div className="philosophy-icon">
            <img 
              src="/assets/images/ontology.svg" 
              alt="핵심 철학"
              className="philosophy-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="philosophy-fallback" style={{ display: 'none' }}>🎯</div>
          </div>
          <div className="philosophy-content">
            <h2 className="philosophy-title">핵심 철학</h2>
            <p className="philosophy-lead">지속 가능한 혁신</p>
            <p className="philosophy-body">
              BISCAT은 로봇 산업의 근본적 한계인 '복잡함'과 '비유연성'을 해결하고자 시작된 회사입니다. 
              우리는 온톨로지(Ontology)기반의 데이터 구조를 통해 다양한 로봇, 센서, 설비를 통합하고 
              자연어 수준의 명령만으로도 누구나 쉽게 로봇을 활용할 수 있는 지능 플랫폼을 제공합니다.
            </p>
            
            <div className="philosophy-values">
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>혁신</h3>
                <p>끊임없는 연구개발을 통해 새로운 가치를 창출합니다.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>신뢰</h3>
                <p>투명하고 정직한 관계를 바탕으로 신뢰를 구축합니다.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h3>성장</h3>
                <p>고객과 함께 지속적으로 성장하는 파트너십을 추구합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
