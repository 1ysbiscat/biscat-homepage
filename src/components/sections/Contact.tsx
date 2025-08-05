import React, { useState } from 'react';
import './Contact.css';
import Button from '../ui/Button';
import { contactInfo, socialLinks, company } from '../../data/siteData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        <p className="section-subtitle">
          궁금한 점이 있으시면 언제든지 연락해 주세요
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 주소</h3>
              <p>{contactInfo.address}</p>
            </div>
            
            <div className="contact-item">
              <h3>✉️ 이메일</h3>
              <p>{contactInfo.email}</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>문의하기</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">제목 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">메시지 *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <Button variant="primary">
                문의 보내기
              </Button>
            </form>
          </div>
        </div>
        
        {/* 모바일 전용 푸터 정보 */}
        <div className="mobile-footer-info">
          <div className="mobile-footer-logo">
            <img 
              src="/assets/images/logo.svg" 
              alt={company.name}
              className="mobile-footer-logo-image"
              onError={(e) => {
                // SVG 파일이 없으면 텍스트로 대체
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textLogo = target.nextElementSibling as HTMLElement;
                if (textLogo) textLogo.style.display = 'block';
              }}
            />
            <h4 className="mobile-footer-logo-text" style={{ display: 'none' }}>비스캣(주)</h4>
          </div>
          
          <div className="mobile-footer-section">
            <h5 className="mobile-footer-company-name">비스캣(주)</h5>
            <p>{company.description}</p>
            
            <div className="mobile-footer-contact">
              <p><strong>대표자:</strong> 고동욱</p>
              <p><strong>주소:</strong> {contactInfo.address}</p>
              <p><strong>이메일:</strong> {contactInfo.email}</p>
            </div>
          </div>
          
          <div className="mobile-footer-copyright">
            <p>&copy; 2025 {company.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
