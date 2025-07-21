import React from 'react';
import './Hero.css';
import { company } from '../../data/siteData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* 애니메이션 그라디언트 배경 */}
        <div className="hero-animated-bg"></div>
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          {/* 중앙 로고 */}
          <div className="hero-logo">
            <img 
              src="/assets/images/logo.svg" 
              alt={company.name}
              className="hero-logo-image"
              onError={(e) => {
                // SVG 파일이 없으면 텍스트로 대체
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textLogo = target.nextElementSibling as HTMLElement;
                if (textLogo) textLogo.style.display = 'block';
              }}
            />
            <h1 className="hero-logo-text" style={{ display: 'none' }}>{company.name}</h1>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
