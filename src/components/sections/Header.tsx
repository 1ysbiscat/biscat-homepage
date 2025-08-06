import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { company } from '../../data/siteData';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // 네비게이션 메뉴 정의
  const navigation = [
    { id: "home", label: "홈", path: "/", isScroll: true },
    { id: "about", label: "회사소개", path: "/#about", isScroll: true },
    { id: "services", label: "제품소개", path: "/#services", isScroll: true },
    { id: "team", label: "프로젝트", path: "/#team", isScroll: true },
    { id: "contact", label: "문의하기", path: "/#contact", isScroll: true },
    { id: "ir", label: "IR", isButton: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // 홈 섹션 높이 기준으로 투명도 판단 - 항상 보이도록 수정
      const heroSection = document.getElementById('home');
      if (heroSection && window.location.pathname === '/') {
        const heroHeight = heroSection.offsetHeight;
        setIsAtTop(scrollY < heroHeight - 100);
      } else {
        // 다른 페이지에서는 항상 보이도록
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleIRClick = () => {
    // PDF 파일 다운로드
    const link = document.createElement('a');
    link.href = '/assets/biscat ir.pdf';
    link.download = 'BISCAT IR 자료.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // 현재 페이지가 홈이 아니면 홈으로 이동 후 스크롤
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // 홈 페이지에서 직접 스크롤
    setTimeout(() => {
      if (sectionId === 'home') {
        // 홈 섹션으로 스크롤 (페이지 맨 위로)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80; // 헤더 높이 고려
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isAtTop ? 'header-transparent' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {/* SVG 로고 파일이 있을 경우 사용, 없으면 텍스트 표시 */}
            <img 
              src="/assets/images/logo_2.svg" 
              alt={company.name}
              className="logo-image"
              onError={(e) => {
                // SVG 파일이 없으면 텍스트로 대체
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textLogo = target.nextElementSibling as HTMLElement;
                if (textLogo) textLogo.style.display = 'block';
              }}
            />
            <h2 className="logo-text" style={{ display: 'none' }}>{company.name}</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.id} className="nav-item">
                  {item.isButton ? (
                    <button 
                      className="nav-link nav-button ir-button"
                      onClick={handleIRClick}
                    >
                      {item.label}
                    </button>
                  ) : item.isScroll ? (
                    <button
                      className="nav-link"
                      onClick={() => handleScrollClick(item.id)}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link 
                      to={item.path || '/'} 
                      className="nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
