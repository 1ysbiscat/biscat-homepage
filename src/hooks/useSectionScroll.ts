import { useEffect } from 'react';

interface SectionScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useSectionScroll = (options: SectionScrollOptions = {}) => {
  const { threshold = 0.3, rootMargin = '0px 0px -50% 0px' } = options;

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], .hero');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.id || 'home';
            
            // URL 해시 업데이트 (히스토리에 추가하지 않음)
            if (sectionId !== window.location.hash.substring(1)) {
              window.history.replaceState(null, '', `#${sectionId}`);
            }
            
            // 네비게이션 활성 상태 업데이트
            updateActiveNavigation(sectionId);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // URL 해시 변경 감지 및 자동 스크롤
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // 헤더 높이 계산
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 80;
          
          // 부드러운 스크롤로 이동
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // 페이지 로드 시 URL 해시가 있으면 해당 섹션으로 스크롤
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // 해시 변경 이벤트 리스너 추가
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [threshold, rootMargin]);
};

const updateActiveNavigation = (activeId: string) => {
  // 모든 네비게이션 링크에서 활성 클래스 제거
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // 현재 섹션에 해당하는 네비게이션 링크에 활성 클래스 추가
  const activeLink = document.querySelector(`a[href="#${activeId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
};
