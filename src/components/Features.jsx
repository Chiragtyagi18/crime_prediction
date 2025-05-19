import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVideo, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Real-Time Alerts',
    description: 'Get notified instantly about incidents near you.',
    icon: faBell,
    video: 'https://video-previews.elements.envatousercontent.com/h264-video-previews/182b591d-21cc-44ff-82a8-8db3a5513476/4259632.mp4',
  },
  {
    title: 'Live Video',
    description: 'Watch live broadcasts of ongoing incidents.',
    icon: faVideo,
    video: 'https://cdn.pixabay.com/video/2023/01/28/148301-793718115_tiny.mp4',
  },
  {
    title: 'Safety Tracking',
    description: 'Share your location with trusted contacts.',
    icon: faMapMarkerAlt,
    video: 'https://cdn.pixabay.com/video/2015/11/02/1236-144355017_tiny.mp4',
  },
];

const Features = () => (
  <section className="py-12 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={feature.icon} className="text-blue-500 text-3xl mr-2" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <div className="mb-4">
            <video
              src={feature.video}
              className="w-full rounded-md shadow-sm"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

