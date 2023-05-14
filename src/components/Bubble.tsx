import React from 'react';
import Image, { ImageLoader, StaticImageData } from 'next/image';

export interface BubbleProps {
  title: string;
  items: string[];
  img: StaticImageData;
  backgroundImage: StaticImageData;
}

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Bubble: React.FC<BubbleProps> = ({ title, items, img, backgroundImage }) => {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}${backgroundImage}`;

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div>
        <Image src={img} alt={title} width={100} height={100} loader={imageLoader} />
      </div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bubble;
