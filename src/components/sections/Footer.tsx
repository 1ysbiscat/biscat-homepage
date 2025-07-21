import React from 'react';
import './Footer.css';
import { company, contactInfo } from '../../data/siteData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            {/* 로고 섹션 */}
            <div className="footer-logo">
              <img 
                src="/assets/images/logo.svg" 
                alt={company.name}
                className="footer-logo-image"
                onError={(e) => {
                  // SVG 파일이 없으면 텍스트로 대체
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const textLogo = target.nextElementSibling as HTMLElement;
                  if (textLogo) textLogo.style.display = 'block';
                }}
              />
              <h3 className="footer-logo-text" style={{ display: 'none' }}>{company.name}</h3>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>빠른 링크</h4>
            <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#services">서비스</a></li>
              <li><a href="#team">팀</a></li>
              <li><a href="#contact">연락처</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>회사 정보</h4>
            <div className="footer-contact">
              <p><strong>상호명:</strong> {company.name}</p>
              <p><strong>대표자:</strong> 고동욱</p>
              <p>📍 {contactInfo.address}</p>
              <p>✉️ {contactInfo.email}</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
