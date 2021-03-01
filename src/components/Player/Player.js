import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCheck} from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const { image, name, salary, club } = props.player
    const handleAddPlayer = props.handleAddPlayer
    const playerStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        height: '500px',
        width: '300px'
    }
    const imageStyle = {
        height: '200px',
    }

    return (
        <div>
            <div className=" d-flex">
                <div style={playerStyle}>
                    <img className="card-img-top" style={imageStyle} src={image} alt="" />
                    <div class="card-body">
                        <h3>{name}</h3>
                        <h3>Club: {club}</h3>
                        <h3>Salary: ${salary}</h3>
                        <button onClick={() => handleAddPlayer(props.player)} className="btn btn-secondary"><FontAwesomeIcon icon={faUserCheck} /> Add Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;