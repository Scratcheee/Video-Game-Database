import React from 'react'

const GameCard = (props) => {
    const {game} = props;
    return (
        <div className="card" >
            <img className="card--image" src={game.background_image} alt={game.name + 'poster'} />
            <div className="card--content">
                <h3 className="card--title">{game.name}</h3>
                <p><small>Release Date: {game.released}</small></p>
                <p><small>Rating: {game.rating}</small></p>

            </div>
        </div>
    )
}

export default GameCard
