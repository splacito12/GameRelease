import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GameCard from './GameCard'

//add games later
const games = [
  {
    id: 1,
    title: "Paralives",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1118520/header.jpg",
    genre: "Life Simulation",
    releaseDate: "May 25 2026 (Early Access)",
    site: "Steam",
    description: "Paralives is a life simulation game about building homes, lives and bonds. Through both hardship and success, where will your story take you?",
    link: "https://store.steampowered.com/app/1118520/Paralives/",
    color: "#f9a8d4"
  },
  {
    id: 2,
    title: "Stardew Valley",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    genre: "Farming RPG",
    releaseDate: "Feb 26, 2026",
    site: "Steam",
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    link: "https://store.steampowered.com/app/413150/Stardew_Valley/",
    color: "#86efac"
  },
  {
    id: 3,
    title: "It Takes Two",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
    genre: "Co-op Platformer",
    releaseDate: "Mar 26, 2021",
    site: "Steam",
    description: "Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship.",
    link: "https://store.steampowered.com/app/1426210/It_Takes_Two/",
    color: "#fdba74"
  },
  {
    id: 4,
    title: "Hades II",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1145350/header.jpg",
    genre: "Roguelite Action",
    releaseDate: "Sep 25, 2025",
    site: "Steam",
    description: "Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler.",
    link: "https://store.steampowered.com/app/1145350/Hades_II/",
    color: "#c4b5fd"
  },
  {
    id: 5,
    title: "Hollow Knight: Silksong",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg",
    genre: "Metroidvania",
    releaseDate: "Sep 4, 2025",
    site: "Steam",
    description: "Discover a vast, haunted kingdom in Hollow Knight: Silksong! Explore, fight and survive as you ascend to the peak of a land ruled by silk and song.",
    link: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
    color: "#67e8f9"
  },
  {
    id: 6,
    title: "Balatro",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2379780/header.jpg",
    genre: "Rguelite Deckbuilder",
    releaseDate: "Feb 20, 2024",
    site: "Steam",
    description: "The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.",
    link: "https://store.steampowered.com/app/2379780/Balatro/",
    color: "#fde047"
  },
  {
    id: 7,
    title: "Project Zomboid",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg",
    genre: "Survival Horror",
    releaseDate: "Nov 8, 2013 (Early Access)",
    site: "Steam",
    description: "Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..",
    link: "https://store.steampowered.com/app/108600/Project_Zomboid/",
    color: "#a3a3a3"
  },
  {
    id: 8,
    title: "Unpacking",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1135690/header.jpg",
    genre: "Puzzle",
    releaseDate: "Nov 2, 2021",
    site: "Steam",
    description: "Unpacking is a zen puzzle game about the familiar experience of pulling possessions out of boxes and fitting them into a new home. Part block-fitting puzzle, part home decoration, you are invited to create a satisfying living space while learning clues about the life you’re unpacking",
    link: "https://store.steampowered.com/app/1135690/Unpacking/",
    color: "#fca5a5"
  },
  {
    id: 9,
    title: "No, I'm Not A Human",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/3180070/header.jpg",
    genre: "Psychological Horror",
    releaseDate: "Sep 15, 2025",
    site: "Steam",
    description: "WARNING. Stay inside. Lock your doors. Close the blinds. Only let humans in. Eliminate all Visitors. An anxiety horror about paranoia in the End of Times.",
    link: "https://store.steampowered.com/app/3180070/No_Im_not_a_Human/",
    color: "#4ade80"
  },
  {
    id: 10,
    title: "Tiny Glade",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2198150/header.jpg",
    genre: "Cozy Builder",
    releaseDate: "Sep 23, 2024",
    site: "Steam",
    description: "Tiny Glade is a small diorama builder where you doodle whimsical castles, cozy cottages & romantic ruins. Explore gridless building chemistry as the game adorns your glades with procedural detail. No management, combat or goals: just kick back and turn forgotten meadows into lovable dioramas.",
    link: "https://store.steampowered.com/app/2198150/Tiny_Glade/",
    color: "#dbb8f5"
  }
]

function App() {
  return (
    <div className="app">
    <header>
      <h1> 🎮 Indie Game Releases</h1>
      <h2> Check out the most recent or popular Indide game releases!</h2>
    </header>
      <div className='board'>
        {games.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
}

export default App
