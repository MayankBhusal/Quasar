import pyttsx3
import speech_recognition as sr
import webbrowser
import datetime
import pyjokes
import pyautogui 



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
           

if __name__ == "__main__":
    while True :
     data1 = convert_to_lower(sptex())
     if "jarvis" in data1:
         print("Yes Sir , I am listening .How can i help you sir ? ")
         speech_to_text("yes sir!! , i am listening . how can i help you sir?")
     elif "your name" in data1:
         name = "My name is Jarvis."
         print(name)
         speech_to_text(name)
     elif 'time right now' in data1:
         time = datetime.datetime.now().strftime("%I%M%p")
         print(time)
         speech_to_text(time)
     elif 'open youtube' in data1:
         webbrowser.open("https://www.youtube.com/")
     elif 'open google' in data1:
        webbrowser.open("https://www.google.com/")
     elif "joke" in data1:
         joke_1=pyjokes.get_joke(language="en",category="neutral")
         print(joke_1)
         speech_to_text(joke_1)
     elif "close tab" in data1:
         speech_to_text("Okay sir, closing the tab")
         pyautogui.hotkey('ctrl', 'w')
     elif "close window" in data1:
         speech_to_text("Okay sir, closing the window")
         pyautogui.hotkey('alt', 'F4')
     elif "exit" in data1:
         print("okay sir!!. Have a fantastic day!!! .")
         speech_to_text("okay sir , have a fantastic day .")
         break
          
