import { useState, useEffect } from 'react';

const use3DRotation = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientY / innerHeight - 0.5) * Math.PI;
      const y = (clientX / innerWidth - 0.5) * Math.PI;
      setRotation({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return rotation;
};

export default use3DRotation;