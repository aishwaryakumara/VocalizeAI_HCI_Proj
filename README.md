# Voice Chat Application with Speech Synthesis

## Overview
This project is an application designed to help individuals who have hearing and speaking disablities. The application bridges communication gaps through features like Speech-to-Text (STT), Text-to-Speech (TTS), Emotion Integration, and Customizable Speech Output.

## Features: 
The application improves the quality of life and independence for individuals with  communication disablities by automating and enhancing communication tasks through AI features.

- Speech-to-Text (STT): Using Whisper AI for real-time transcription of spoken language into text. 
- Text-to-Speech (TTS): Using SpeechSynthesis to convert typed or generated text into audible speech. Also supports 7 different languages, ( I plan on integrating Google API in future for better voice quality and support for languages) 
- Emotion Integration: Enables users to add emotional context to the voice responses with emotions tags (e.g., happy, calm, serious).
- Customizable Speech Output: Offers adjustable pitch, tone, and speed settings for individuals with cognitive disabilities.
- Suggestions using GenAI: Provides context-aware suggestions for quick and effective responses.


## Tech Stack
- Frontend: React.js with Tailwind CSS
- Backend: Flask with Python
- APIs: OpenAI Whisper (for transcription), GPT-3.5 Turbo (for suggestions), SpeechSynthesis Web Speech API
- Libraries:
  - lucide-react (for icons)
  - flask-cors (for handling CORS)

## Project Structure

### Frontend
```
src/
├── components/
│   ├── Chat.jsx          # Main chat interface
│   ├── Controls.jsx      # Recording and input controls
│   ├── Header.jsx        # Application header
│   ├── Footer.jsx        # Application footer
│   ├── MessageList.jsx   # Chat message display
│   ├── Suggestions.jsx   # AI-generated suggestions
│   └── SpeechControlsSidebar.jsx # Voice control panel
├── hooks/
│   ├── useAudioRecorder.js # Audio recording custom hook
│   └── useSpeechSynthesis.js # Speech synthesis custom hook
└── App.jsx              # Root component
```

### Backend
```
├── app.py              # Flask server
└── requirements.txt    # Python dependencies
```

## Installation

### Backend Setup
1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Unix/macOS
   venv\Scripts\activate     # On Windows
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```bash
   python app.py
   ```
Note: Run the backend server before running the frontend server. Ensure you are listing on the correct ports

### Frontend Setup
1. Clone the repository
2. Navigate to vocalizeAI_frontend directory
3. Install TailWind
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
4. Initialize the tailwind.config.js file:
  ```bash
   npx tailwindcss init
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Create a `.env` file with required API keys:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
    I have provided my API key in the comment for grading purposes. 

7. Start the client side:
   ```bash
   npm run dev
   ```

## Usage

### Voice Recording
1. Click the "Record" button to start recording
2. Speak your message
3. Click "Stop" to end recording
4. The application will transcribe your speech and display suggestions

### Text Input
1. Type your message in the input field
2. Press Enter or click "Send" to submit

### Speech Settings
1. Access the speech control sidebar using the settings icon
2. Adjust voice parameters:
   - Select different voices
   - Modify pitch, rate, and volume
   - Choose emotion additions
   - Changes apply to subsequent speech output

## API Endpoints

### POST /transcribe
Handles audio transcription and generates suggestions.

**Request:**
- Method: POST
- Content-Type: form-data
- Body: audio file (WAV format)

**Response:**
```json
{
  "transcription": "transcribed text",
  "suggestions": ["suggestion 1", "suggestion 2", "suggestion 3"]
}
```

## Custom Hooks

### useAudioRecorder
Manages audio recording functionality:
- `startRecording()`: Initiates audio recording
- `stopRecording()`: Stops recording and processes audio
- `recording`: Indicates recording status

### useSpeechSynthesis
Handles text-to-speech functionality:
- Voice selection
- Speech parameter adjustments
- Emotion-based modulation
- Speaking status management

## Contact
For questions or support, please contact [arvind.ai@northeastern.edu]
