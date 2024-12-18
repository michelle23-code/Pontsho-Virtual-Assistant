import React, { createContext, useState } from 'react'
export const datacontext = createContext()
import run from "../gemini";

function UserContext({children}) {
  let [speaking, setSpeaking]=useState(false)
  let [prompt,setPrompt]=useState("listening...")
  let [resoponse,setResponse]=useState(false)

  function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.volume= 1;
    text_speak.rate= 1;
    text_speak.pitch= 1;
    text_speak.lang= "en-GB";
    window.speechSynthesis.speak(text_speak)
  }
  async function aiResponse(prompt){
    let text =await run(prompt)
    let newText=text.split("**")&&text.split("**")&&text.replace("google","Pontsho Lekoto")&&text.replace("google","Pontsho Lekoto")
    setPrompt(newText)
    speak(newText)
    setResponse(true)
    setTimeout(()=>{
      setSpeaking(false)
    },6000)
    
  }
  let speechRecognition =window.speechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition()
  recognition.onresult = (e) => {
    let currentIndex =e.resultIndex
    let transcript =e.results[currentIndex][0].transcript
    setPrompt(transcript)
    takeCommand(transcript.toLowerCase())
  }

  function takeCommand(command){
    if(command.includes("open")&& command.includes("youtube")){
      window.open("https://www.youtube.com/","_blank")
      speak("opening Youtube")
      setPrompt("opening Youtube...")
      setTimeout(()=>{
        setSpeaking(false)
      },6000)
    }
    else{
      aiResponse(command)
    }
  }

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    setResponse
  }
  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  )
}

export default UserContext;
