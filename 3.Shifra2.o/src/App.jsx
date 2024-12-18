import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from "./context/UserContext";
import speakimg from "./assets/speak.gif";

function App() {
  let { recognition,speaking,setSpeaking }=useContext(datacontext)

  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra,Your Advanced virtual Assistant</span>
      {!speaking ? <button
          onClick={()=>{
            setSpeaking(true)
            recognition.start()
          }}>
          Click here <CiMicrophoneOn /> </button>
       : 
        <div className="resoponse">
          <img src={speakimg} alt="" id="speak" />
          <p>listeing</p>
        </div>
}
     </div>
        
  
  )
}

export default App;
