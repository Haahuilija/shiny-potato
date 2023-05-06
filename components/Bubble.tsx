import React from 'react';
import '../app/styles.css';
import Image from 'next/image';

export interface BubbleProps {
  title: string;
  items: string[];
  img: string;
}

const Bubble: React.FC<BubbleProps> = ({ title, items, img }) => {
  const iconSrc = `${img}`;

  return (
    <div className="bubble">
      <Image src={iconSrc} alt={title} width={150} height={150} className='bubble-image' />
      <h2 className="bubble-title">{title}</h2>
      <ul className="bubble-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bubble;