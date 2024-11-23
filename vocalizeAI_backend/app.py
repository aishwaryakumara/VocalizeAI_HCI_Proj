import os
from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("No OPENAI_API_KEY found in environment variables")

client = OpenAI(api_key=api_key)

def generate_gpt_suggestions(transcription):
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f'Generate 3-4 thoughtful follow-up responses for: "{transcription}"'
            },
            {
                "role": "assistant",
                "content": 'Give Suggestions in double quotes'
            }]
        )
        suggestions = response.choices[0].message.content.strip().split("\n")
        return [s.strip("-").strip() for s in suggestions if s.strip()]
    except Exception as e:
        print(f"Error generating suggestions: {str(e)}")
        return ["Sorry, I couldn't generate suggestions."]

@app.route("/transcribe", methods=["POST"])
def transcribe_audio():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    audio_file = request.files["file"]
    temp_path = "temp_audio.wav"
    audio_file.save(temp_path)

    try:
        with open(temp_path, "rb") as audio:
            transcript_response = client.audio.transcriptions.create(
                model="whisper-1",
                file=audio
            )
        
        transcription = transcript_response.text
        suggestions = generate_gpt_suggestions(transcription)
        
        return jsonify({
            "transcription": transcription,
            "suggestions": suggestions
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

if __name__ == "__main__":
    app.run(debug=True, port=8000)