import React from 'react';
import './Culture.css';
import member2Image from '../../assets/images/member2.jpg';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="section culture">
      <div 
        className="culture-background"
        style={{ '--bg-image': `url(${member2Image})` } as React.CSSProperties}
      >
        <div className="culture-overlay">
          <div className="culture-content">
            <h2 className="culture-main-title">조직 문화</h2>
            <p className="culture-subtitle">데이터처럼 연결되는 조직</p>
            
            <div className="culture-description">
              <p>
                BISCAT의 조직 문화는 서로 연결되고, 의미를 공유하는 구조입니다.
              </p>
              <p>
                각자의 전문성은 독립적이면서도, 팀 전체가 유기적으로 작동하며
                하나의 목표를 향해 움직입니다.
              </p>
            </div>

            <div className="culture-values">
              <div className="value-item">
                <h3>연결성</h3>
                <p>개별 전문성이 하나의 네트워크로 연결되어 시너지를 창출합니다.</p>
              </div>
              <div className="value-item">
                <h3>투명성</h3>
                <p>정보와 지식이 자유롭게 공유되어 모든 구성원이 성장합니다.</p>
              </div>
              <div className="value-item">
                <h3>적응성</h3>
                <p>변화하는 환경에 빠르게 적응하며 지속적으로 진화합니다.</p>
              </div>
              <div className="value-item">
                <h3>혁신성</h3>
                <p>기존의 틀을 깨고 새로운 가능성을 끊임없이 탐구합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;