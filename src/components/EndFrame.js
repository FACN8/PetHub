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

      <div className='img'>
       <img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
    </div>
    </div>
  );
};

export default EndFrame;
