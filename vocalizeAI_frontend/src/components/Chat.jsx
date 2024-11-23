import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MessageList from './MessageList';
import Suggestions from './Suggestions';
import Controls from './Controls';
import SpeechControlsSidebar from './SpeechControlsSidebar';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useAudioRecorder } from '../hooks/useAudioRecorder';


/**
 * Chat component that handles the main chat interface, including message display,
 * audio recording, speech synthesis, and suggestions.
 */
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const messageEndRef = useRef(null);

  const speech = useSpeechSynthesis();
  const audioRecorder = useAudioRecorder(handleAudioCaptured);

  // Effects
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleAudioCaptured(audioBlob) {
    sendAudioToServer(audioBlob);
  }

  async function sendAudioToServer(audioBlob) {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.wav");
    
    try {
      const response = await fetch("http://127.0.0.1:8000/transcribe", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      
      if (data.transcription) {
        setMessages(prev => [...prev, { type: "transcription", text: data.transcription }]);
        setSuggestions(data.suggestions || []);
      }
    } catch (err) {
      console.error("Failed to send audio:", err);
    }
  }

  const trimText = (suggestion) => {
    const match = suggestion.match(/"(.*?)"/);
    return match && match[1] ? match[1] : suggestion;
  };

  const handleSuggestionClick = (suggestion) => {
    const trimmedText = trimText(suggestion);
    setMessages(prev => [...prev, { type: "response", text: trimmedText }]);
    speech.speak(trimmedText);
    setSuggestions([]);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages(prev => [...prev, { type: "response", text: inputText }]);
      speech.speak(inputText);
      setInputText('');
      setSuggestions([]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-1 flex flex-col">
          <Header 
          onSidebarClick ={setIsSidebarOpen}
          isSidebarOpen = {isSidebarOpen}
          />
          
        <MessageList 
          messages={messages} 
          messageEndRef={messageEndRef} 
          onSpeak={speech.speak}
        />
        
        <Suggestions 
          suggestions={suggestions} 
          onSuggestionClick={handleSuggestionClick} 
        />
        
        <Controls 
          recording={audioRecorder.recording}
          onStartRecording={audioRecorder.startRecording}
          onStopRecording={audioRecorder.stopRecording}
          inputText={inputText}
          setInputText={setInputText}
          onSendMessage={handleSendMessage}
        />
        
        <Footer />
      </div>

      <SpeechControlsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        defaultRate={speech.defaultRate}
        defaultPitch={speech.defaultPitch}
        defaultVolume={speech.defaultVolume}
        defaultEmotion={speech.defaultEmotion}
        onRateChange={speech.setDefaultRate}
        onPitchChange={speech.setDefaultPitch}
        onVolumeChange={speech.setDefaultVolume}
        onEmotionChange={speech.setDefaultEmotion}
        voices={speech.voices}
        selectedVoiceIndex={speech.selectedVoiceIndex}
        onVoiceChange={speech.setSelectedVoiceIndex}
      />
    </div>
  );
};

export default Chat;