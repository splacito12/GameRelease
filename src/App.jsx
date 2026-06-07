import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GameCard from './GameCard'

//add games later
const games = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

function App() {
  return (
    <div>
      <h1> Indie Game Releases</h1>
      <h2> Check out the most recent indie game releases on various platforms!</h2>

      <div className='board'>
        {games.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}

export default App
