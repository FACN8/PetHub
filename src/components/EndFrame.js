import React from "react";
import "./EndFrame.css"


const EndFrame = ({ setAlive, setHunger, setHealth, setUserData }) => {
  const reset = () => {
    setAlive(true);
    setHunger(100);
    setHealth(100);
    setUserData(null);
  };

  return (
    <div className='end-frame-container'>
      <div className='Gameover'>Game Over !</div>
      <br></br>
      <button onClick={reset} className='reset-button'>
          Restart!
      </button>
    </div>
  );
};

export default EndFrame;
