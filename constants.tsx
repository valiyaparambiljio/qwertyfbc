
import { NavItem, Testimonial, TeamMember, CountryContact, Service, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Ahmed Al-Farsi", company: "Retail Global UAE", text: "Fraternal Business Care has transformed our accounting processes. Their team is professional and highly responsive.", rating: 5 },
  { id: 2, name: "Sarah Jenkins", company: "TechNova USA", text: "Expert guidance on international taxation. They made our expansion into the US market seamless.", rating: 5 },
  { id: 3, name: "Rajesh Kumar", company: "Innova India", text: "The most reliable audit partners we have ever worked with. Their attention to detail is unmatched.", rating: 5 },
  { id: 4, name: "David Thompson", company: "UK Logistics Ltd", text: "Efficient bookkeeping and legal advisory. A one-stop shop for all business needs.", rating: 4 },
  { id: 5, name: "Emily Wong", company: "Canada Imports", text: "Professional staff and great insights into Canadian business laws. Highly recommended!", rating: 5 },
  { id: 6, name: "Mohammed Hassan", company: "UAE Trading", text: "From incorporation to daily accounting, they handle everything with extreme precision.", rating: 5 },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Robert Wilson", role: "Managing Partner", bio: "20+ years of experience in corporate finance and international audit.", image: "https://picsum.photos/400/500?random=1" },
  { id: 2, name: "Anjali Menon", role: "Senior Tax Consultant", bio: "Expert in cross-border taxation and strategic planning.", image: "https://picsum.photos/400/500?random=2" },
  { id: 3, name: "Marcus Thorne", role: "Head of Legal & Compliance", bio: "Specializes in corporate law and business incorporation across 6 countries.", image: "https://picsum.photos/400/500?random=3" },
  { id: 4, name: "Siddharth Rao", role: "Audit Director", bio: "Focuses on internal controls and statutory assurance services.", image: "https://picsum.photos/400/500?random=4" },
];

export const COUNTRY_CONTACTS: CountryContact[] = [
  { country: "India", address: "Ayyanthole, Thrissur, Kerala IN 680003", mobile: "+91 97477 99111", email: "india@fbiz.co.in", website: "www.fraternalcare.in" },
  { country: "UAE", address: "Office 202, Business Bay, Dubai, UAE", mobile: "+971 50 123 4567", email: "uae@fraternalcare.com", website: "www.fraternalcare.ae" },
  { country: "USA", address: "1200 Avenue of the Americas, New York, NY 10036", mobile: "+1 212 555 0198", email: "usa@fraternalcare.com", website: "www.fraternalcare.us" },
  { country: "Canada", address: "Suite 500, 100 King St W, Toronto, ON M5X 1A9", mobile: "+1 416 555 0123", email: "canada@fraternalcare.com", website: "www.fraternalcare.ca" },
  { country: "UK", address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ", mobile: "+44 20 7123 4567", email: "uk@fraternalcare.com", website: "www.fraternalcare.co.uk" },
];

export const SERVICES: Service[] = [
  { id: 'accounting', title: 'Accounting & Bookkeeping', description: 'Comprehensive financial record maintenance, payroll processing, and MIS reporting tailored to your business size.', icon: 'Calculator' },
  { id: 'incorporation', title: 'Incorporation Services', description: 'End-to-end support for business setup, company registration, and licensing across multiple jurisdictions.', icon: 'Building2' },
  { id: 'audit', title: 'Audit & Assurance', description: 'Statutory audits, internal audits, and risk assessment services to ensure compliance and financial integrity.', icon: 'ShieldCheck' },
  { id: 'taxation', title: 'Taxation & Planning', description: 'Strategic tax planning, direct and indirect tax filings, and cross-border taxation advisory.', icon: 'FileText' },
  { id: 'hr-legal', title: 'HR, Software & Legal', description: 'HR management, legal documentation, and business software implementation including ERP solutions.', icon: 'Users' },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: "The Impact of New Tax Laws in 2024", excerpt: "Understanding how recent legislative changes affect your corporate filings.", date: "May 15, 2024", category: "Taxation", image: "https://picsum.photos/600/400?random=10" },
  { id: 2, title: "Scaling Your Business in the UAE", excerpt: "A guide to the legal requirements and opportunities in the Middle East.", date: "April 20, 2024", category: "Incorporation", image: "https://picsum.photos/600/400?random=11" },
  { id: 3, title: "Effective Bookkeeping for Small Businesses", excerpt: "Why maintaining clean books is the foundation of financial health.", date: "March 10, 2024", category: "Accounting", image: "https://picsum.photos/600/400?random=12" },
];
