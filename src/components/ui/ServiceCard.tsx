import React from 'react';
import './ServiceCard.css';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const isImageIcon = service.icon.includes('.svg') || service.icon.includes('.png') || service.icon.includes('.jpg');
  
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-icon">
        {isImageIcon ? (
          <img 
            src={service.icon} 
            alt={service.title}
            className="service-icon-image"
            onError={(e) => {
              // SVG 파일이 없으면 기본 아이콘으로 대체
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
        ) : (
          <span className="service-icon-emoji">{service.icon}</span>
        )}
        <span className="service-icon-fallback" style={{ display: 'none' }}>🤖</span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      
      <div className="service-card-footer">
        <span className="click-hint">자세히 보기 →</span>
      </div>
    </div>
  );
};

export default ServiceCard;
