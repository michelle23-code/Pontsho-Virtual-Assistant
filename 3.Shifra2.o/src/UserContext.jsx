import React, { Children, createContext, useState } from "react";
export const datacontext = createContext();

function UserContext({ children }) {
  let [speaking, setSpeaking] = useState(false);
  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.volume = 1;
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang = "en-GB";
    window.speechSynthesis.speak(text_speak);
  }
  async function aiResponse(prompt) {
    let text = await run(prompt);
    speak(text);
  }
  let speechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
  let recognition = new speechRecognition();
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    console.log(transcript);
    aiResponse(transcript);
  };

  let value = {
    recognition,
    speaking,
    setSpeaking,
  };
  return (
    <div>
      <datacontext.Provider value={value}>{children}</datacontext.Provider>
    </div>
  );
}

export default UserContext;
