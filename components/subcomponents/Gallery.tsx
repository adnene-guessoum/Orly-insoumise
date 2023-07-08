// image gallery sliding tiles tailwind
import React from 'react';

const Gallery = (): JSX.Element => {
  return (
    <div className="flex w-full lg:h-[600px] h-96 items-center justify-center border border-black dark:border-white">
      <div className="flex group w-full h-full border">
        <div className="slide bg-illu1"></div>
        <div className="slide bg-illu2"></div>
        <div className="slide bg-illu3"></div>
        <div className="slide bg-illu4"></div>
        <div className="slide bg-illu5"></div>
      </div>
    </div>
  );
};

export default Gallery;
