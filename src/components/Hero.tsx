import type { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaButton: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, ctaButton }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="cta-button">{ctaButton}</button>
      </div>
    </section>
  );
};

export default Hero;
