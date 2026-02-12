
export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface CountryContact {
  country: string;
  address: string;
  mobile: string;
  email: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}
