import { useState, useEffect } from 'react';

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };

    return () => {
      img.onload = () => {};
    };
  }, [src]);

  return <img {...{ src: imgSrc, ...props }} alt={props.alt || ''} />;
};
export default ProgressiveImg;
