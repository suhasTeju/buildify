
import "./scrollindicator.css";

import React, { useState, useEffect } from 'react';

const ScrollIndicatorButton: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;

    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      const scrollTop = window.pageYOffset;
      setIsScrollVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  const borderStyle: React.CSSProperties = {
    strokeDasharray: `${scrollProgress} 100`,
  };

  return (
    <div className={`scroll-indicator ${isScrollVisible ? 'visible' : ''}`}>
      <div className="scroll-indicator-button">
      <div className="arrow">&#8593;</div>
        <svg className="progress-ring">
        
          <circle
            className="progress-ring-border"
            r={16}
            cx={25}
            cy={25}
            fill="transparent"
            stroke="green"
            style={borderStyle}
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicatorButton;