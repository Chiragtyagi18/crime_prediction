import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Dr. Sarah Thompson, NYC Trauma Surgeon',
    feedback: 'Citizen alerted me about a nearby emergency, allowing our team to prepare ahead of time. That early warning saved a life—those extra minutes truly matter.',
  },
  {
    name: 'Joel M., Los Angeles user since 2019',
    feedback: 'When my brother was trapped inside a store during an incident, Citizen was my go-to for real-time updates. It kept us informed and safe until he was able to leave.',
  },
  {
    name: 'Emily R., San Francisco',
    feedback: 'I love how Citizen keeps me connected and informed about safety in my neighborhood. The app’s alerts help me feel more secure every day.',
  },
  {
    name: 'Michael B., Chicago',
    feedback: 'The live video feature helped me see ongoing incidents firsthand, giving me peace of mind and control over my surroundings.',
  },
  {
    name: 'Ana K., Miami',
    feedback: 'Sharing my location with trusted contacts through Citizen reassures my family when I’m out late. It’s an essential safety tool I rely on.',
  },
];

const Testimonials = () => (
  <section className="py-12 px-6 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="text-blue-500 text-4xl flex-shrink-0"
          />
          <div>
            <p className="text-gray-800 italic">"{testimonial.feedback}"</p>
            <p className="text-gray-600 mt-4 font-semibold text-right">- {testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

