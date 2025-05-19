import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Links Section */}
        <div className="flex justify-center md:justify-between flex-wrap gap-10 text-sm font-medium">
          <div className="min-w-[120px]">
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Mission</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Press</a></li>
            </ul>
          </div>
          <div className="min-w-[120px]">
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Protect Yourself Heading */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">Protect Yourself</h2>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-8 text-white text-2xl">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/><circle cx="17.5" cy="6.5" r="1.25"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="X (Twitter)"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.05 9.05 0 01-2.88 1.1 4.5 4.5 0 00-7.68 4.1A12.8 12.8 0 013 2.1a4.5 4.5 0 001.39 6 4.47 4.47 0 01-2.05-.56v.06a4.5 4.5 0 003.6 4.4 4.52 4.52 0 01-2.03.08 4.5 4.5 0 004.2 3.12A9 9 0 013 18.58 12.72 12.72 0 009 20a12.72 12.72 0 0013-14.29A9.13 9.13 0 0023 3z"/>
            </svg>
          </a>

          {/* Telegram */}
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Telegram"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <svg fill="currentColor" viewBox="0 0 24 24"  className="w-7 h-7">
              <path d="M21.64 3.2a1.25 1.25 0 00-1.67-.45L3.14 10.64A1.75 1.75 0 003 12a1.76 1.76 0 002.55 1.55l4.53-2.3 2.1 2.1 6.37-9.61a1.25 1.25 0 00-.91-.54z"/>
              <path d="M2.5 12c0 2.48 1.73 4.52 4.11 4.83l4.47-5.12-7.56-2.44A1.75 1.75 0 002.5 12z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://www.whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M20.52 3.48a11.91 11.91 0 10-16.84 16.84L3 21l1.7-.46a11.87 11.87 0 0015.82-17.06zm-2.68 13.99c-.38 1.07-2.22 2.06-3.27 2.19-1.07.13-1.85.19-4.02-1.19-3.43-2.1-5.65-6.48-5.8-6.78-.14-.27-1.17-1.54-1.17-2.94 0-1.4.75-2.08 1.01-2.36.26-.27.57-.3.76-.3.2 0 .4 0 .57.01.18.02.43-.07.66.5.22.58.74 2 .8 2.15.07.16.11.34.02.52-.1.18-.16.3-.31.48-.15.18-.32.4-.46.54-.15.15-.3.29-.13.56.16.26.7 1.15 1.51 1.87 1.04.88 1.91 1.12 2.19 1.25.28.13.44.11.6-.07.16-.18.67-.82.85-1.1.17-.28.34-.24.57-.15.23.09 1.44.67 1.69.79.25.12.42.18.48.28.06.11.06.64-.32 1.71z"/>
            </svg>
          </a>
        </div>

        {/* App store badges */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on Google Play"
          >
            <img
              alt="Get it on Google Play"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-12"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <img
              alt="Download on the App Store"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-12"
            />
          </a>
        </div>

        {/* Footer base line */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          &copy; {new Date().getFullYear()} Citizen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
