import React from 'react'
import PLayers from '../players'
import Player from './Player'
import "./PlayersList.css"


const PlayersList = () => {

    return (
        
    <div className='cristiano'>
        {PLayers.map(joueur=><Player joueur={joueur} key={joueur.id} />)}
    </div>
    )
}

export default PlayersList

