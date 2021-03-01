import React from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const AddPlayer = (props) => {
    const addPlayers = props.addPlayers;
    let totalSalary = 0;
    for (let i = 0; i < addPlayers.length; i++) {
        const player = addPlayers[i];
        totalSalary = totalSalary + player.salary;

    }
    return (
        <div>
            <div>
            <h2>Dream Club</h2>
            <br/>
                <h4>Player Added : {addPlayers.length}</h4>
                <h4>Total Budget : ${totalSalary}</h4>
            </div>
            <div>
                {
                    addPlayers.map((player) => <PlayerInfo player ={player}></PlayerInfo>)
                }
            </div>
        </div>
    );
};

export default AddPlayer;