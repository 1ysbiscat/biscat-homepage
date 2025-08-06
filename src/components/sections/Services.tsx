import React, { useState } from 'react';
import './Services.css';
import ServiceCard from '../ui/ServiceCard';
import ProductModal from '../ui/ProductModal';
import { services } from '../../data/siteData';
import { Service } from '../../types';

const Services: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (service: Service) => {
    setSelectedProduct(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">제품 소개</h2>
        <p className="section-subtitle">
          온톨로지 기반의 통합 지능 시스템과<br></br>시·공간 로봇 지능을 통한 제조·물류 산업의 게임 체인저
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Services;
