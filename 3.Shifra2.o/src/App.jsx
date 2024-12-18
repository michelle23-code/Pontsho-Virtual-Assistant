import { CiMicrophoneOn } from "react-icons/ci";
import "./App.css"
import va from "./assets/ai.png"
import React,{useContext} from "react";
import { datacontext } from "./context/UserContext";
import speakimg from "./assets/speak.gif";
import aigif from "./assets/aivoice.gif";

function App() {
  let { recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse }=useContext(datacontext)

  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra,Your Advanced virtual Assistant     
      </span>
      {!speaking?
       <button onClick={()=>{
            setPrompt("listening...")
            setSpeaking(true)
            setResponse(true)
            recognition.start()
          }}>Click here <CiMicrophoneOn /></button>
           : 
        <div className='resoponse'>
          {!response?
          <img src={speakimg} alt="" id="speak" /> 
           :
          <img src={aigif} alt="" id="aigif" />}
          <p>{prompt}</p>
        </div>
}
     </div>
        
  
  )
}

export default App
