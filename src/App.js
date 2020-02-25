import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartFrame from "./components/StartFrame";
import EndFrame from "./components/EndFrame";
import FeedAction from "./components/FeedAction";
import HealthBar from "./components/HealthBar";
import HungerBar from "./components/HungerBar";
import HitAction from "./components/HitAction";
import PetAction from "./components/PetAction";
import PetFrame from "./components/PetFrame";

function App() {
  const [health, setHealth] = React.useState(100);
  const [hunger, setHunger] = React.useState(100);
  const [userData, setUserData] = React.useState(null);
  const [alive, setAlive] = React.useState(true);

  setInterval(() => {
    setHunger(previousHunger => previousHunger >= 5 ? previousHunger - 5 : 0);
    setHealth(previousHealth => hunger === 0 ? previousHealth - 5 : previousHealth);
  }, 5000);

  React.useEffect(() => {
    if (health <= 0) {
      setAlive(false);
    }
  }, [health]);

  if (!userData) {

    return (
      <div className="App">
        <StartFrame
          setUserData={setUserData} />
      </div>
    );
  } else if (!alive) {

    return (
      <div className="App">
        <EndFrame
          setAlive={setAlive}
          setUserData={setUserData}
          setHealth={setHealth}
          setHunger={setHunger} />
      </div>
    );
  } else {

    return (
      <div className="App">

        <HealthBar
          health={health} />
        <HungerBar
          hunger={hunger} />
        <PetFrame
          userData={userData} />

        <div className="actions-container">

          <FeedAction
            setHunger={setHunger} />
          <PetAction
            setHealth={setHealth} />
          <HitAction
            setHealth={setHealth} />

        </div>
      </div>
    );
  }
}

export default App;
