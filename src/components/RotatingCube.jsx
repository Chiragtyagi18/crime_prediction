import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.png';
import './RotatingCube.css';

const images = [img1, img2, img3, img4, img5, img6];

const RotatingCubeWithText = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-screen bg-black text-white px-6 md:px-20">
  {/* Text Section */}
  <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Crime Prediction</h1>
    <p className="typing-effect text-lg md:text-xl leading-relaxed border-l-4 pl-4 border-yellow-400">
      Predicting crime with AI. Analyzing patterns. Preventing threats. Creating safer cities through real-time intelligence.
    </p>
  </div>

  {/* Cube Section */}
  <div className="scene w-64 h-64 md:w-72 md:h-72 translate-x-[-50px]">
    <div className="cube">
      {images.map((img, index) => (
        <div className={`face face-${index + 1}`} key={index}>
          <img src={img} alt={`Face ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default RotatingCubeWithText;
