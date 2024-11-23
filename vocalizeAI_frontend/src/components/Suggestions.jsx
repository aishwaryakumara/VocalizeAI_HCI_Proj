import React from 'react';

const Suggestions = ({ suggestions, onSuggestionClick }) => (
  suggestions.length > 0 && (
    <div className="p-4 bg-gray-800 space-y-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick(suggestion)}
          className="w-full text-left p-3 rounded bg-gray-700 text-white hover:bg-gray-600 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
);

export default Suggestions;