import { useState, useEffect } from 'react';

const defaultEmotionAdjustments = {
  neutral: { rate: 1, pitch: 1, volume: 1 },
  happy: { rate: 1.1, pitch: 1.3, volume: 1.2 },
  sad: { rate: 0.8, pitch: 0.8, volume: 0.8 },
  excited: { rate: 1.3, pitch: 1.4, volume: 1.4 },
  calm: { rate: 0.7, pitch: 0.9, volume: 0.7 }
};

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);
  const [defaultRate, setDefaultRate] = useState(1);
  const [defaultPitch, setDefaultPitch] = useState(1);
  const [defaultVolume, setDefaultVolume] = useState(1);
  const [defaultEmotion, setDefaultEmotion] = useState('neutral');

  useEffect(() => {
    const synth = window.speechSynthesis;
    
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = (text, emotion = defaultEmotion) => {
    const synth = window.speechSynthesis;
    
    if (synth.speaking) {
      synth.cancel();
    }

    if (text.trim() === "") {
      console.warn("Please enter some text to speak.");
      return;
    }

    const paragraphs = text.split("\n\n");
    const availableVoices = synth.getVoices();
    
    paragraphs.forEach((paragraph) => {
      const utterance = new SpeechSynthesisUtterance(paragraph);
      
      // Only set voice if we have available voices
      if (availableVoices.length > 0) {
        utterance.voice = availableVoices[selectedVoiceIndex % availableVoices.length];
      }

      const adjustments = defaultEmotionAdjustments[emotion];
      utterance.rate = defaultRate * adjustments.rate;
      utterance.pitch = defaultPitch * adjustments.pitch;
      utterance.volume = defaultVolume * adjustments.volume;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      synth.speak(utterance);
    });
  };

  return {
    speak,
    voices,
    isSpeaking,
    selectedVoiceIndex,
    setSelectedVoiceIndex,
    defaultRate,
    setDefaultRate,
    defaultPitch,
    setDefaultPitch,
    defaultVolume,
    setDefaultVolume,
    defaultEmotion,
    setDefaultEmotion
  };
};