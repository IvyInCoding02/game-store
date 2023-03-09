import React from 'react';
import GameCover from '../GameCover';
import './style.css'

const GameItem = ({ game }) => {

  return (
    <div className="game-item">
      <GameCover img={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <p className='game__text'>{genre}</p>
          ))}
        </div>
        <div className="game-item__buy">
          {game.price}
        </div>
      </div>
    </div>
  )
}

export default GameItem