import type { FC } from 'react';

interface FooterLink {
  title: string;
  link: string;
}

type FooterSection = FooterLink[];

interface Social {
  [key: string]: string;
}

type FooterData = {
  [K in string]: K extends 'social' ? Social : FooterSection;
};

interface FooterProps {
  companyName?: string;
  footerData?: Partial<FooterData>;
}

const Footer: FC<FooterProps> = ({ companyName = 'Company', footerData = {} }) => {
  // Helper function to format section title
  const formatTitle = (key: string): string => {
    return key
      .split(/(?=[A-Z])/)
      .join(' ')
      .toUpperCase();
  };

  // Type guards for footer sections
  const isFooterSection = (value: unknown): value is FooterSection => {
    return Array.isArray(value) && value.every(item => 
      typeof item === 'object' && item !== null && 'title' in item && 'link' in item
    );
  };

  const isSocialSection = (value: unknown): value is Social => {
    return typeof value === 'object' && 
           value !== null && 
           !Array.isArray(value) && 
           Object.values(value).every(v => typeof v === 'string');
  };

  // Helper function to render a section only if data exists
  const renderSection = (key: string, items: FooterSection) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="footer-section" key={key}>
        <h3>{formatTitle(key)}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={`${key}-${index}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render all footer sections except social
  const renderSections = () => {
    return Object.entries(footerData)
      .filter(([key, value]) => key !== 'social' && isFooterSection(value))
      .map(([key, value]) => renderSection(key, value as FooterSection));
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {renderSections()}
      </div>
      <div className="footer-bottom">
        <p>&copy; {companyName} {new Date().getFullYear()}. All rights reserved.</p>
        {footerData.social && isSocialSection(footerData.social) && (
          <div className="social-links">
            {Object.entries(footerData.social).map(([platform, link]) => (
              <a 
                key={platform}
                href={link}
                aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
