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
  const [health, setHealth] = React.useState(localStorage.getItem('health') ? localStorage.getItem('health') : 100);
  const [hunger, setHunger] = React.useState(localStorage.getItem('hunger') ? localStorage.getItem('hunger') : 100);
  const [userData, setUserData] = React.useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null);
  const [alive, setAlive] = React.useState(localStorage.getItem('alive') ? localStorage.getItem('alive') : true);

  React.useEffect(() => {
    localStorage.setItem('health', health);
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('alive', alive);
  }, [health, hunger, userData, alive]);

  React.useEffect(() => {
    if (health <= 0) {
      setAlive(false);
    }
  }, [health]);

  React.useEffect(() => {
    let timer = setInterval(() => {
      setUserData(data => {
        if (data) {
          setHunger(previousHunger => {
            if (previousHunger >= 1) {
              return previousHunger - 1;
            } else {
              setHealth(previousHealth => previousHunger === 0 ? previousHealth - 1 : previousHealth);
              return 0;
            }
          });
        }
        return data;
      });
    }, 500);
    return () => clearInterval(timer);
  }, [userData]);

  if (!alive) {

    return (
      <div className="PetFrame">
        <EndFrame
          setAlive={setAlive}
          setUserData={setUserData}
          setHealth={setHealth}
          setHunger={setHunger} />
      </div>
    );
  } else if (!userData) {
    return (
      <div className="PetFrame">
        <StartFrame
          setUserData={setUserData} />
      </div>
    );
  } else {

    return (
      <div className="PetFrame">

        <PetFrame
          userData={userData} />
        <HealthBar
          health={health} />
        <HungerBar
          hunger={hunger} />

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
