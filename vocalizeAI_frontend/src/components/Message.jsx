import React, { useState } from 'react';
import SpeakerIcon from './SpeakerIcon';


const Message = ({ type, text, onSpeak }) => {
  const [selectedEmotion, setSelectedEmotion] = useState('neutral');
  
  const emotions = [
    { value: 'neutral', label: '😐 Neutral' },
    { value: 'happy', label: '😊 Happy' },
    { value: 'sad', label: '😢 Sad' },
    { value: 'excited', label: '🎉 Excited' },
    { value: 'calm', label: '😌 Calm' }
  ];

  const handleSpeak = () => {
    onSpeak(text, selectedEmotion);
  };

  return (
    <div className={`p-3 rounded-lg ${
      type === "transcription" 
        ? "bg-gray-700 text-white ml-auto max-w-[70%]" 
        : "bg-blue-600 text-white mr-auto max-w-[70%]"
    }`}>
      <div className="flex items-center gap-2">
        <span className="flex-grow">{text}</span>
        {type !== "transcription" && (
          <div className="flex items-center gap-2">
            <select
              value={selectedEmotion}
              onChange={(e) => setSelectedEmotion(e.target.value)}
              className="bg-transparent border border-white/30 rounded px-1 py-0.5 text-sm focus:outline-none focus:border-white/50"
              aria-label="Select emotion"
            >
              {emotions.map(emotion => (
                <option 
                  key={emotion.value} 
                  value={emotion.value}
                  className="bg-blue-600 text-white"
                >
                  {emotion.label}
                </option>
              ))}
            </select>
            <button 
              onClick={handleSpeak}
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Speak message"
            >
              <SpeakerIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;