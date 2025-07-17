import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">회사 소개</h2>
        
        {/* 1. 회사소개 - 배경이미지와 중앙정렬 텍스트 */}
        <div className="about-intro">
          <div className="about-intro-content">
            <h3 className="about-intro-title">혁신을 통해 미래를 창조합니다</h3>
            <p className="about-intro-body">
              BISCAT은 첨단 기술과 창의적 사고를 바탕으로 고객의 비즈니스 성공을 이끌어내는 
              전문 기업입니다. 우리는 단순한 서비스 제공을 넘어 고객과 함께 성장하는 
              진정한 파트너가 되고자 합니다.
            </p>
            <div className="company-details">
              <div className="detail-item">
                <h4>우리의 비전</h4>
                <p>기술과 혁신을 통해 더 나은 세상을 만들어가는 글로벌 리더가 되겠습니다.</p>
              </div>
              <div className="detail-item">
                <h4>우리의 미션</h4>
                <p>고객의 성공을 위한 최적의 솔루션을 제공하여 함께 성장하는 파트너십을 구축합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 핵심 철학 - 좌측 아이콘, 우측 텍스트 */}
        <div className="about-philosophy">
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
            <h3 className="philosophy-title">핵심 철학</h3>
            <p className="philosophy-lead">지속 가능한 혁신</p>
            <p className="philosophy-body">
              우리의 핵심 철학은 '지속 가능한 혁신'입니다. 단기적인 성과보다는 
              장기적인 관점에서 고객과 함께 성장할 수 있는 가치를 창출하며, 
              기술의 발전이 인간의 삶을 더욱 풍요롭게 만드는 방향으로 나아갑니다.
            </p>
            
            <div className="philosophy-values">
              <div className="value-item">
                <div className="value-icon">💡</div>
                <span>혁신</span>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <span>신뢰</span>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <span>성장</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 조직 문화 - 중앙 보라색 박스, 배경이미지 */}
        <div className="about-culture">
          <div className="culture-box">
            <h3 className="culture-title">조직 문화</h3>
            <p className="culture-subtitle">함께 성장하는 문화</p>
            <p className="culture-body">
              열린 소통과 상호 존중을 바탕으로 한 수평적 조직 문화를 지향합니다. 
              개인의 창의성과 전문성을 존중하며, 함께 배우고 성장하는 
              학습 조직을 만들어가고 있습니다.
            </p>
            
            <div className="culture-features">
              <div className="feature-item">
                <span>💬 열린 소통</span>
              </div>
              <div className="feature-item">
                <span>🎨 창의성 존중</span>
              </div>
              <div className="feature-item">
                <span>📚 지속적 학습</span>
              </div>
              <div className="feature-item">
                <span>⚖️ 수평적 관계</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
