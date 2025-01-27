import { useState } from 'react'
import HarrietPicure from './assets/Harriet-Gold.png' 
import JanaPicture from './assets/Jana-Prokopova.png' 
import MariaPicture from './assets/Maria.png'
import VaclavPicture from './assets/Vaclav-Novak.png'  
import { RECENT_EVENTS } from './data.js'
import './App.css'

function Header() {
  return( 
  <header>
  <div>
    <a href="https://www.medjugorje.ws/" target="_blank">
      <img src={MariaPicture} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Marian Courses</h1>
  </header>
  )
}

function Introduction() {
  return (
    <section>
      <h2>Hello & Welcome</h2>
      <p>
        Welcome to the Marian Courses Website!
      </p>
    </section>
  )
}

function RecentEvent({image, title, description, className}) {
  return (  
  <li>
    <img src={image} alt={title} className={className} />
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />  
      <main>
        <Introduction />
        <section id="recent-events">
          <h2>Recent Events</h2>
          <ul>
            <RecentEvent
              title={RECENT_EVENTS[1].title}
              description={RECENT_EVENTS[1].description}
              image={RECENT_EVENTS[1].image}
            />
            <RecentEvent {...RECENT_EVENTS[2]}/>
            <RecentEvent {...RECENT_EVENTS[0]}/>
          </ul>
        </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Líbíme se ti {count}x
        </button>
        <p>
          Kolikrát klikneš, tolikanásobně se ti naše kurzy líbí.
        </p>
      </div>
      <p className="read-the-docs">
        Copyright © 2025 by Marian Courses
      </p>
      </main>
    </div>
  )
}

export default App
