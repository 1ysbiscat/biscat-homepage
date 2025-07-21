// 홈페이지 데이터 타입 정의
export interface Company {
  name: string;
  description: string;
  logo?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  businessHours: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
  client?: string;
}
