import React from 'react';
import { Mic, Square, Send } from 'lucide-react';

const Controls = ({ 
  recording, 
  onStartRecording, 
  onStopRecording, 
  inputText, 
  setInputText, 
  onSendMessage 
}) => (
  <div className="p-4 bg-gray-800 border-t border-gray-700">
    <div className="max-w-screen-2xl mx-auto flex gap-3 items-stretch">
      {/* Recording Button */}
      <button
        onClick={recording ? onStopRecording : onStartRecording}
        className={`
          flex items-center justify-center gap-2 px-6 h-11 rounded-lg font-medium whitespace-nowrap w-40
          transition-all duration-300 ease-in-out
          ${recording 
            ? "bg-red-500 hover:bg-red-600 text-white" 
            : "bg-emerald-500 hover:bg-emerald-600 text-white"
          }
        `}
      >
        {recording ? (
          <>
            <Square className="h-5 w-5" />
            <span>Stop</span>
          </>
        ) : (
          <>
            <Mic className="h-5 w-5" />
            <span>Record</span>
          </>
        )}
      </button>

      {/* Input and Send Section */}
      <div className="flex-1 flex gap-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 h-11 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                   border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500
                   transition-all duration-200"
          onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
        />
        <button
          onClick={onSendMessage}
          disabled={!inputText.trim()}
          className={`
            flex items-center justify-center gap-2 px-6 h-11 rounded-lg font-medium w-32
            transition-all duration-300 ease-in-out
            ${inputText.trim() 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <span>Send</span>
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default Controls;