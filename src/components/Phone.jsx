import React, { useState, useRef, useEffect } from 'react';
import crime1 from './crime1.mp4';
import crime2 from './crime2.mp4';
import crime3 from './crime3.mp4';
import crime4 from './crime4.mp4';
const videos = [
  crime1, crime2, crime3, crime4, crime3, crime2
];

const PHONE_WIDTH = 360;
const PHONE_HEIGHT = 640;
const NAV_HEIGHT = 60;
const STATUS_BAR_HEIGHT = 30;

const paragraphLines = [
  "Stay ahead with real-time safety alerts, predictive intelligence, and live tracking.",
  "Connect with your community and live more safely.",
  "Our app provides insightful crime data and notifications tailored to your location",
  "so you can be proactive about your security.",
  "Receive customized alerts based on your preferences and neighborhood activities.",
  "Explore safety resources and tips curated by experts.",
  "Join a network of aware and vigilant users committed to their community’s safety."
];

const PhoneWithText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const videoRefs = useRef([]);
  const paragraphRef = useRef(null);

  const [visibleLinesCount, setVisibleLinesCount] = useState(0);
  const [hasScrolledToParagraph, setHasScrolledToParagraph] = useState(false);

  const minSwipeDistance = 50;
  const videoCount = videos.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHasScrolledToParagraph(true);
        });
      },
      { threshold: 0.3 }
    );
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }
    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasScrolledToParagraph) return;
    if (visibleLinesCount >= paragraphLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLinesCount((count) => count + 1);
    }, 600); // 600ms delay between lines
    return () => clearTimeout(timer);
  }, [visibleLinesCount, hasScrolledToParagraph]);

  const onTouchStart = (e) => {
    if (e.touches) setTouchStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (e.touches) setTouchEndX(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev + 1) % videoCount);
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev - 1 + videoCount) % videoCount);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const [mouseDownX, setMouseDownX] = useState(null);
  const [mouseUpX, setMouseUpX] = useState(null);

  const onMouseDown = (e) => setMouseDownX(e.clientX);

  const onMouseMove = (e) => {
    if (mouseDownX !== null) setMouseUpX(e.clientX);
  };

  const onMouseUp = () => {
    if (mouseDownX === null || mouseUpX === null) {
      setMouseDownX(null);
      setMouseUpX(null);
      return;
    }
    const distance = mouseDownX - mouseUpX;
    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => (prev + 1) % videoCount);
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => (prev - 1 + videoCount) % videoCount);
    }
    setMouseDownX(null);
    setMouseUpX(null);
  };

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % videoCount);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentIndex) {
        video.playbackRate = 1.5;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-start mt-10 space-x-70">
      {/* Left text area */}
      <div
        ref={paragraphRef}
        style={{
          height: PHONE_HEIGHT,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#111',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2 className="text-4xl font-bold mb-6">
          Experience Safety & Awareness
        </h2>
        <div className="text-lg leading-relaxed text-gray-700">
          {paragraphLines.map((line, idx) => (
            <p
              key={idx}
              style={{
                opacity: hasScrolledToParagraph && idx < visibleLinesCount ? 1 : 0,
                transform: hasScrolledToParagraph && idx < visibleLinesCount ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                marginBottom: '1em',
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Right phone screen */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        className="rounded-3xl shadow-xl bg-black overflow-hidden relative select-none flex flex-col"
        style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT }}
      >
        {/* Top Status Bar */}
        <div
          className="flex justify-between items-center px-4 text-white text-xs"
          style={{ height: STATUS_BAR_HEIGHT, borderBottom: '1px solid #333', fontFamily: 'Arial, sans-serif' }}
        >
          <div>9:41 AM</div>
          <div>Fri, Jul 21</div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12.75a17.933 17.933 0 0 1 21 0" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15a12.044 12.044 0 0 1 15 0" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18a6.033 6.033 0 0 1 7.5 0" />
              <circle cx="12" cy="20.25" r="0.75" fill="white" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-4"
            >
              <rect x="2" y="6" width="18" height="12" rx="2" ry="2" />
              <rect x="20" y="10" width="2" height="4" rx="1" ry="1" />
              <rect x="6" y="9" width="10" height="6" fill="white" />
            </svg>
          </div>
        </div>

        {/* Video Container */}
        <div style={{ height: PHONE_HEIGHT - NAV_HEIGHT - STATUS_BAR_HEIGHT, overflow: 'hidden', width: '100%' }}>
          <div
            className="flex h-full"
            style={{
              width: `${videoCount * PHONE_WIDTH}px`,
              transform: `translateX(-${currentIndex * PHONE_WIDTH}px)`,
              transition: 'transform 0.4s ease-in-out',
            }}
          >
            {videos.map((src, i) => (
              <video
                key={i}
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                className="flex-shrink-0"
                style={{
                  width: PHONE_WIDTH,
                  height: PHONE_HEIGHT - NAV_HEIGHT - STATUS_BAR_HEIGHT,
                  objectFit: 'cover',
                }}
                playsInline
                muted
                loop={false}
                preload="auto"
                onEnded={handleVideoEnded}
                controls={false}
              />
            ))}
          </div>
        </div>

        {/* Virtual Navigation Buttons (decorative only) */}
        <div
          className="bg-black border-t border-gray-700 flex justify-around items-center"
          style={{ height: NAV_HEIGHT }}
        >
          <div
            aria-label="Back"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center opacity-70"
            title="Back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div
            aria-label="Home"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center opacity-70"
            title="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6"
              />
            </svg>
          </div>

          <div
            aria-label="Recent Apps"
            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center opacity-70"
            title="Recent Apps"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              className="w-6 h-6"
            >
              <rect x="4" y="6" width="12" height="12" rx="2" ry="2" />
              <rect x="8" y="10" width="12" height="12" rx="2" ry="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneWithText;

