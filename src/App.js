import './App.css';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import AddPlayer from './components/addPlayer/addPlayer';

function App() {
  const [players, setPlayers]=useState([])
  const [addPlayers, setAddPlayers]=useState([])

  useEffect(()=>{
    console.log(data);
    setPlayers(data)
  }, [])

  const handleAddPlayer = (player) => {
    const newAddPlayers = [...addPlayers, player];
    setAddPlayers(newAddPlayers)
  }
  return (
    <div className="style">
      <div style={{textAlign: 'center'}}>
        <h1>Dream Club Player's Selection</h1>
        <br/>
      <h2>Total Players: {players.length}</h2>
      </div> 
      <div style={{display: 'flex', padding:'20px'}}>
      <div>
      <AddPlayer addPlayers={addPlayers} ></AddPlayer>
      </div>
      <div className = "w-75 d-flex flex-wrap justify-content-around align-item-center">
      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}>{player}</Player>)
      }
      </div>
      </div>
    </div>
  );
}

export default App;
