import React from 'react';
import { X } from 'lucide-react';

const SpeechControlsSidebar = ({ 
  isOpen, 
  defaultRate, 
  defaultPitch, 
  defaultVolume, 
  defaultEmotion,
  onRateChange,
  onPitchChange,
  onVolumeChange,
  onEmotionChange,
  voices,
  selectedVoiceIndex,
  onVoiceChange,
  onClose
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-80 bg-gray-800 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          shadow-lg border-r border-gray-700 z-50
        `}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-lg font-semibold">Speech Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close settings"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Voice Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Voice
            </label>
            <select
              value={selectedVoiceIndex}
              onChange={(e) => onVoiceChange(Number(e.target.value))}
              className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 text-sm
                       border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition-colors duration-200"
            >
              {voices.map((voice, index) => (
                <option key={index} value={index}>
                  {voice.name}
                </option>
              ))}
            </select>
          </div>

          {/* Rate Control */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Rate: {defaultRate.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={defaultRate}
              onChange={(e) => onRateChange(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Pitch Control */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Pitch: {defaultPitch.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              value={defaultPitch}
              onChange={(e) => onPitchChange(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Volume Control */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Volume: {defaultVolume.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={defaultVolume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          {/* Emotion Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Default Emotion
            </label>
            <select
              value={defaultEmotion}
              onChange={(e) => onEmotionChange(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 text-sm
                       border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition-colors duration-200"
            >
              <option value="neutral">😐 Neutral</option>
              <option value="happy">😊 Happy</option>
              <option value="sad">😢 Sad</option>
              <option value="excited">🎉 Excited</option>
              <option value="calm">😌 Calm</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeechControlsSidebar;