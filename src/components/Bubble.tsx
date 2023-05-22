import React from 'react';
import Image, { StaticImageData } from 'next/image';
import '../public/styles/styles.css';

export interface BubbleProps {
  title: string;
  items: string[];
  icon: StaticImageData;
  background: StaticImageData;
}

const Bubble: React.FC<BubbleProps> = ({ title, items, icon, background }) => {
  const backgroundImageUrl = background.src;
  const iconUrl = icon.src;

  return (
    <div className="bubble-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="bubble">
        <div className="bubble-icon">
          <Image src={iconUrl} alt={title} width={100} height={100} />
        </div>
        <h2 className="bubble-title">{title}</h2>
        <ul className="bubble-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bubble;
