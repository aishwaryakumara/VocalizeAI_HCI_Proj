import React from 'react';
import { Settings } from 'lucide-react';

const Header = ({ onSidebarClick, isSidebarOpen }) => (
  <div className="bg-gray-900 border-b border-gray-800">
    {/* Top gradient line */}
    <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

    <header className="h-16 px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        {/* Three evenly spaced sections */}
        <div className="flex items-center justify-start flex-1">
          <img
            src="/pngegg.png"
            alt="Icon"
            className="w-20 h-20 mb-2 mt-3"
          />
          <span className="ml-4 text-white text-xl font-semibold tracking-tight">
            VocalizeAI
          </span>
        </div>


        <div className="flex-1 flex justify-center">
          <h1 className="text-gray-200 text-lg font-medium">
            Your Chat Dashboard
          </h1>
        </div>

        <div className="flex-1 flex justify-end">
          <button
            onClick={() => onSidebarClick(!isSidebarOpen)}
            className={`
              group flex items-center space-x-2.5 h-10 px-4 rounded-lg
              transition-all duration-300 ease-in-out
              ${isSidebarOpen
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
              }
            `}
            aria-label="Toggle speech settings"
          >
            <div className={`
              transition-transform duration-300 ease-in-out transform
              ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}
            `}>
              <Settings
                className={`
                  h-5 w-5
                  ${isSidebarOpen ? 'text-white' : 'text-gray-300'}
                `}
              />
            </div>
            <span className={`
              text-sm font-medium
              ${isSidebarOpen ? 'text-white' : 'text-gray-300'}
            `}>
              Settings
            </span>
          </button>
        </div>
      </div>
    </header>
  </div>
);

export default Header;