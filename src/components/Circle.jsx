// src/components/Circle.js
import React, { useState, useEffect } from 'react';

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 10, y: e.clientY -10 });
  };

  useEffect(() => {

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-5 h-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full absolute pointer-events-none "
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Circle;
