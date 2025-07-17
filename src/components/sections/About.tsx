import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <>
      {/* 1. 회사소개 섹션 - 풀스크린 */}
      <section id="about" className="section about-intro-section">
        <div className="about-intro-container">
          <div className="company-logo">
            <img 
              src="/assets/images/logo.svg" 
              alt="BISCAT Logo"
              className="logo-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <h2 className="logo-fallback" style={{ display: 'none' }}>BISCAT</h2>
          </div>
          
          <h2 className="section-title">회사 소개</h2>
          <h3 className="about-intro-title">Beyond Intelligence : <br></br>Systems of Cognitive and Adaptable Things</h3>
          <p className="about-intro-body">
            BISCAT은 자동화의 진입 장벽을 낮춰, 로봇이 일하는 세상을 만듭니다.
          </p>
          
          <div className="company-details">
            <div className="detail-item">
              <h4>혁신적 자동화</h4>
              <p>복잡한 자동화 기술을 누구나 쉽게 접근할 수 있도록 만듭니다.</p>
            </div>
            <div className="detail-item">
              <h4>로봇과의 협업</h4>
              <p>인간과 로봇이 함께 일하는 미래를 현실로 만들어갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 핵심 철학 섹션 - 풀스크린 */}
      <section id="philosophy" className="section philosophy-section">
        <div className="philosophy-container">
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
            <h2 className="section-title">핵심 철학</h2>
            <p className="philosophy-lead"></p>
            <p className="philosophy-body">
              BISCAT은 로봇 산업의 근본적 한계인 '복잡함'과 '비유연성'을 해결하고자 시작된 회사입니다. 
              우리는 온톨로지(Ontology)기반의 데이터 구조를 통해 다양한 로봇, 센서, 설비를 통합하고 
              자연어 수준의 명령만으로도 누구나 쉽게 로봇을 활용할 수 있는 지능 플랫폼을 제공합니다.
            </p>
            
            <div className="ontology-section">
              <h4 className="ontology-title">Ontology란?</h4>
              <p className="ontology-description">
                온톨로지는 데이터와 지식의 연결성을 표현하고, 다양한 정보와 개념을 구조화하는 기술입니다. 
                Palantir, IBM, Google, Amazon 등 글로벌 기업의 추천 시스템, 의료, 검색, 전자상거래, 
                생명정보 등 다양한 분야에서 활용되고 있습니다. 온톨로지는 데이터 간의 관계를 명확히 하여 
                지식 표현과 정보 모델링을 가능하게 하며, 로봇이 세상과 작업을 이해하고 협력할 수 있도록 
                돕는 공통언어(개념 사전) 역할을 합니다. BISCAT은 온톨로지 기반의 지능 플랫폼을 통해 
                로봇의 조직적 운영, 작업 계획/할당/관리를 실현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 조직 문화 섹션 - 풀스크린 */}
      <section id="culture" className="section culture-section" 
        style={{
          backgroundImage: `url(/assets/images/member2.jpg)`
        }}
      >
        <div className="culture-container">
          <div className="culture-box">
            <h2 className="section-title">조직 문화</h2>
            <p className="culture-body">
              데이터처럼 연결되는 조직. BISCAT의 조직 문화는 서로 연결되고, 의미를 공유하는 구조입니다. 
              각자의 전문성은 독립적이면서도, 팀 전체가 유기적으로 작동하며 하나의 목표를 향해 움직입니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
