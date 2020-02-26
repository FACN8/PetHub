import React from "react";

const EndFrame = ({ setAlive, setHunger, setHealth, setUserData }) => {
  const reset = () => {
    setAlive(true);
    setHunger(100);
    setHealth(100);
    setUserData(null);
  };

  return (
    <div className='end-frame-container'>
      <button onClick={reset} className='reset-button'>
          Restart!
      </button>
    </div>
  );
};

export default EndFrame;
