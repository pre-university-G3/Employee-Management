import { useState, useEffect } from 'react';

const ProgressScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-white/10 backdrop-blur-sm z-50">
      <div
        className="h-full bg-primary-color transition-all duration-50"
        style={{ width: `${scrollPercentage}%` }}
        role="progressbar"
        aria-valuenow={scrollPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default ProgressScrollBar;