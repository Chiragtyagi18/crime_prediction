import React from 'react';

const IncidentCard = ({ title, location, time, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{location} • {time}</p>
    </div>
  </div>
);

export default IncidentCard;
