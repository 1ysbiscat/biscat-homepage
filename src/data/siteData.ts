// 회사 정보 및 홈페이지 데이터
import { Company, Service, TeamMember, ContactInfo, SocialLinks, NavigationItem, Project } from '../types';

export const company: Company = {
  name: "BISCAT",
  description: "혁신적인 비즈니스 솔루션으로 고객의 성공을 이끌어내는 전문 기업입니다.",
};

export const navigation: NavigationItem[] = [
  { id: "home", label: "홈", href: "#home" },
  { id: "about", label: "회사소개", href: "#about" },
  { id: "products", label: "제품소개", href: "#products" },
  { id: "projects", label: "프로젝트", href: "#projects" },
  { id: "contact", label: "문의하기", href: "#contact" },
  { id: "ir", label: "IR", href: "#ir" },
];

export const services: Service[] = [
  {
    id: 1,
    title: "STAR-Grapher",
    description: "온톨로지 기반의 지능형 로봇 통합 관리 플랫폼으로, 다양한 로봇과 센서를 하나의 시스템에서 관리할 수 있습니다.",
    icon: "/assets/images/stargrapher.svg",
    features: [
      "로봇이 작업 공정별로 자동 할당되고 센서 상태에 따라 동작을 바꿈",
      "특정 로봇에서 오류 발생시, 어떤 작업 공정에 영향을 미치는지 추론 가능",
      "로봇 상태, 작업 내역을 분석하여 생산 품질 분석이나 사고 대응에 활용",
      "작업 스케줄을 기반으로 로봇을 동기화하거나 AMR, 이기종 로봇들과 협업 계획 가능"
    ]
  },
  {
    id: 2,
    title: "STAR",
    description: "자연어 명령을 통해 누구나 쉽게 로봇을 제어할 수 있는 지능형 인터페이스 솔루션입니다.",
    icon: "/assets/images/star.svg",
    features: ["자연어 처리", "직관적 인터페이스", "음성 인식", "스마트 제어"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Servinggo",
    description: "Servinggo의 주행 S/W CoNA를 개발했습니다.",
    icon: "/assets/images/proj1.png",
    category: "서빙로봇",
    client: "코가로보틱스",
    features: ["로봇 통합 관리", "실시간 모니터링", "품질 관리 시스템", "예측 유지보수"]
  },
  {
    id: 2,
    title: "공장 로봇",
    description: "S사의 공장 제조/물류 라인에 로봇을 공급하였습니다",
    icon: "/assets/images/proj2.jpg",
    category: "제조/물류",
    client: "S사",
    features: ["음성 명령 제어", "자동 분류 시스템", "재고 관리", "경로 최적화"]
  },
  {
    id: 3,
    title: "Tow Car",
    description: "군부대내 식자재 물류 대차(자동/수동 주행)에 적용",
    icon: "/assets/images/porj3.jpg",
    category: "물류",
    client: "(주)수성운반기계",
    features: ["환자 안내", "약품 배송", "감염 방지", "응급 상황 대응"]
  },
  {
    id: 4,
    title: "Logistic Robot",
    description: "다수의 회사와 PoC 수행을 통해 현장 적용성 검토",
    icon: "/assets/images/proj4.jpg",
    category: "물류",
    client: "(주)씨에이시스템",
    features: ["코딩 교육", "프로젝트 기반 학습", "협업 도구", "성과 분석"]
  },
  {
    id: 5,
    title: "Smart Chair",
    description: "공공시설을 이용하는 사회적 약자 및 돌봄 인력의 삶의 질을 향상 시키는 서비스 제공",
    icon: "/assets/images/proj5.png",
    category: "R&D",
    client: "Daedong",
    features: ["코딩 교육", "프로젝트 기반 학습", "협업 도구", "성과 분석"]
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "김대표",
    position: "CEO & Founder",
    bio: "10년 이상의 IT 업계 경험을 바탕으로 회사를 이끌어가고 있습니다.",
    email: "ceo@company.com"
  },
  {
    id: 2,
    name: "이기술",
    position: "CTO",
    bio: "최신 기술 트렌드를 파악하고 기술적 방향성을 제시합니다.",
    email: "cto@company.com"
  },
  {
    id: 3,
    name: "박디자인",
    position: "Lead Designer",
    bio: "사용자 중심의 창의적인 디자인으로 브랜드 가치를 높입니다.",
    email: "design@company.com"
  },
  {
    id: 4,
    name: "최개발",
    position: "Senior Developer",
    bio: "안정적이고 확장 가능한 시스템 개발을 담당합니다.",
    email: "dev@company.com"
  }
];

export const contactInfo: ContactInfo = {
  address: "서울시 성동구 왕십리로 222, HIT 518호",
  phone: "02-1234-5678",
  email: "sales@biscat.co.kr",
  businessHours: "평일 9:00 - 18:00"
};

export const socialLinks: SocialLinks = {
  facebook: "https://facebook.com/yourcompany",
  instagram: "https://instagram.com/yourcompany",
  linkedin: "https://linkedin.com/company/yourcompany"
};
