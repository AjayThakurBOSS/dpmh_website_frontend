import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoImg from '../assets/logo_h.png'

const Loader = ({ 
  logoUrl = LogoImg,
  loadingText = "Loading, please wait...",
  duration = 1500,
  onLoadingComplete,
  showProgressBar = true
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        // Loading complete
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 1000);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, onLoadingComplete]);

  // Calculate mask gradient based on progress
  const maskStyle = {
    maskImage: `linear-gradient(to bottom, black ${progress}%, transparent ${progress}%)`,
    WebkitMaskImage: `linear-gradient(to bottom, black ${progress}%, transparent ${progress}%)`
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo with progressive reveal */}
      <div 
        className="w-60 h-60 mb-4 relative"
        style={maskStyle}
      >
        <img
          src={logoUrl}
          alt="Loading"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Spinner */}
      {/* <motion.div
        className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      /> */}
      
      {/* Loading text */}
      <p className="mt-4 text-gray-700 text-sm font-medium">
        {loadingText}
      </p>
      
      {/* Progress bar */}
      {showProgressBar && (
        <div className="mt-2 w-48 bg-gray-200 rounded-full h-1">
          <div 
            className="bg-[#84CEE0] h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Loader;

