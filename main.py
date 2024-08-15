import pyttsx3
import speech_recognition as sr




import os

import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)

chat_session = model.start_chat(
  history=[
  ]
)

response = chat_session.send_message("INSERT_INPUT_HERE")

print(response.text)


def convert_to_lower(s):
    if s is not None:
        return s.lower()
    else:
        return ""


def speech_to_text(x):
    engin = pyttsx3.init()
    voices = engin.getProperty('voices')
    engin.setProperty('voice',voices[0].id)
    rate = engin.getProperty('rate')
    engin.setProperty('rate',150)
    engin.say(x)
    engin.runAndWait()
 
print("Welcome sir \n","It's me Quasar your virtual Assistant")
speech_to_text("Welcome sir!!, It's me Quasar your virtual Assistant ")
def sptex():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
       # print("Welcome sir \n","It's me Jarvis your virtual Assistant")
       # speech_to_text("Welcome sir!!, It's me Jarvis your virtual Assistant ")
        
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
             print("recognizing....")
             data = recognizer.recognize_google(audio)
             return data
        except sr.UnknownValueError:
            print("")
           
whilr

          
