import React, { useState } from 'react';
import './Contact.css';
import Button from '../ui/Button';
import { contactInfo, socialLinks } from '../../data/siteData';

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
              <h3>📞 전화</h3>
              <p>{contactInfo.phone}</p>
            </div>
            
            <div className="contact-item">
              <h3>✉️ 이메일</h3>
              <p>{contactInfo.email}</p>
            </div>
            
            <div className="contact-item">
              <h3>🕒 운영시간</h3>
              <p>{contactInfo.businessHours}</p>
            </div>
            
            <div className="social-links">
              <h3>소셜 미디어</h3>
              <div className="social-icons">
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    📘 Facebook
                  </a>
                )}
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    📷 Instagram
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    💼 LinkedIn
                  </a>
                )}
              </div>
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
      </div>
    </section>
  );
};

export default Contact;
