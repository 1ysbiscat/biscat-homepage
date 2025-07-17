import React from 'react';
import './CompanyIntro.css';

const CompanyIntro: React.FC = () => {
  return (
    <section id="company-intro" className="section company-intro">
      <div className="container">
        <div className="company-intro-content">
          <h2 className="company-intro-title">혁신을 통해 미래를 창조합니다</h2>
          <p className="company-intro-body">
            BISCAT은 첨단 기술과 창의적 사고를 바탕으로 고객의 비즈니스 성공을 이끌어내는 
            전문 기업입니다. 우리는 단순한 서비스 제공을 넘어 고객과 함께 성장하는 
            진정한 파트너가 되고자 합니다.
          </p>
          <div className="company-details">
            <div className="detail-item">
              <h3>우리의 비전</h3>
              <p>기술과 혁신을 통해 더 나은 세상을 만들어가는 글로벌 리더가 되겠습니다.</p>
            </div>
            <div className="detail-item">
              <h3>우리의 미션</h3>
              <p>고객의 성공을 위한 최적의 솔루션을 제공하여 함께 성장하는 파트너십을 구축합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
