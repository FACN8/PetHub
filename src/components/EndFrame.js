import React from "react";

const EndFrame = ({ setAlive, setHunger, setHealth, setUserData }) => {
  const style = {
    "fontSize": "60px"
  };

  const reset = () => {
    setAlive(true);
  };

  React.useEffect(() => {
    setHealth(100);
    setHunger(100);
    setUserData(null);
    localStorage.removeItem('alive');
    localStorage.removeItem('health');
    localStorage.removeItem('hunger');
    localStorage.removeItem('userData');
  }, []);

  return (
    <div className='end-frame-container'>
      <div className='Gameover'>Game Over!</div>
      <br></br>
      <div onClick={reset} className="button" style={style}>
        ⟳
      </div>

      <div className='img'>
        <img src="https://studioboico.com/wp-content/uploads/2018/12/Gizmo-PNG-BIG.png" width='150px'></img>
      </div>
    </div>
  );
};

export default EndFrame;
