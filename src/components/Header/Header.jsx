import MariaPicture from '../../assets/Maria.png'
import './Header.css'

export default function Header() {
    return( 
    <header>
    <div>
      <a href="https://www.medjugorje.ws/" target="_blank">
        <img src={MariaPicture} className="logo maria" alt="Maria logo" />
      </a>
    </div>
    <h1>Marian Courses</h1>
    </header>
    )
  }