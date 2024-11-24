import React from "react";
import { Mic, Speaker, MessageSquare, Settings, Info } from "lucide-react";

const InstructionsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">VocalizeAI Instructions</h1>
      
      {/* Introduction */}
      <div className="max-w-3xl text-gray-700 text-lg leading-7 mb-10">
        <p className="mb-4">
          Welcome to your Assistant! This application allows you to communicate through both voice and text, 
          with real-time transcription and AI-powered responses.
        </p>
      </div>

      {/* Main Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
        {/* Voice Recording */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Mic className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Voice Recording</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the "Record" button to start recording</li>
            <li>Speak clearly into your microphone</li>
            <li>Click "Stop" when you're finished</li>
            <li>Wait for transcription and AI response</li>
          </ol>
        </div>

        {/* Speech Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Speaker className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Speech Settings</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open settings using the sidebar icon</li>
            <li>Adjust voice selection and parameters</li>
            <li>Modify pitch, rate, and volume</li>
            <li>Select different emotional tones</li>
          </ol>
        </div>

        {/* Text Interaction */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Text Interaction</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Type your message in the input field</li>
            <li>Press Enter or click Send to submit</li>
            <li>Click on AI suggestions to use them</li>
            <li>Messages are read aloud automatically</li>
          </ol>
        </div>

        {/* Customization */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Customization</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2">
            <li>Choose from multiple voice options</li>
            <li>Adjust speech characteristics</li>
            <li>Select emotional presets</li>
            <li>Customize playback settings</li>
          </ol>
        </div>
      </div>


      {/* Tips Section */}
      <div className="max-w-3xl w-full bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Info className="w-6 h-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Pro Tips</h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Click the speaker icon again to read aloud again </li>
          <li>Speak clearly and at a moderate pace for better transcription</li>
          <li>Use the sidebar controls to find your preferred voice settings</li>
          <li>Try different emotional presets for varied responses</li>
          <li>Click on any message to have it read aloud again</li>
        </ul>
      </div>

      {/* Footer Note */}
      <footer className="text-center text-sm text-gray-600 max-w-3xl">
        <p className="mb-2">
          <strong>Note:</strong> Make sure your browser has permission to access your microphone for voice recording.
        </p>
        <p>
          For optimal performance, use a recent version of Chrome or Safari.
        </p>
      </footer>
    </div>
  );
};

export default InstructionsPage;