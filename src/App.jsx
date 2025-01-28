import { useState } from 'react';
import { EVENTS } from './Events.js';
import './App.css';
import Header from './components/Header/Header.jsx';
import Event from './components/Events/Events.jsx';
import TabButton from './components/TabButtons/TabButton.jsx';
import LoginBox from './components/LoginBox/LoginBox.jsx';
import RegisterBox from './components/RegisterBox/RegisterBox.jsx';

export const user = {
  username: '',
  email: '',
  password: '',
  registered: false,
  loggedIn: false,
};

function App() {
  const [selectedEventType, setSelectedEventType ] = useState('Please click a button');

  const [count, setCount] = useState(0)

  function handlePress(pressedButton) {
    // pressedButton = "", "", "", ""
    setSelectedEventType(pressedButton)
    console.log(selectedEventType)
  }

  function handleLoginPress() {
    user.username.value
    user.loggedIn = true;
    console.log('Login requested. User is logged in:', user.loggedIn)
  }

  function handleRegisterPress() {
    user.registered = true;
    console.log('Registration requested. Registered:', user.registered)
  }

  return (
    <div>
      <Header />  
      <main>
        <section>
          <p>Welcome to the Marian Courses Website!</p>
        </section>
        <section id="events">
          <h2>Recent Events</h2>
          <ul>
            <Event
              title={EVENTS[1].title}
              description={EVENTS[1].description}
              image={EVENTS[1].image}
            />
            <Event {...EVENTS[2]}/>
            <Event {...EVENTS[0]}/>
          </ul>
        </section>
        <section id="tab-buttons">
          <h2>Event Types</h2>
          <menu>
            <TabButton onPress={() => handlePress('Seminář')}>Seminář</TabButton>
            <TabButton onPress={() => handlePress('Webinář')}>Webinář</TabButton>
            <TabButton onPress={() => handlePress('Video záznam')}>Video záznam</TabButton>
            <TabButton onPress={() => handlePress('Audio nahrávka')}>Audio nahrávka</TabButton>
          </menu>
          {selectedEventType}
        </section>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Líbíme se ti {count}x
          </button>
          <p>
            Kolikrát klikneš, tolikanásobně se ti naše kurzy líbí.
          </p>
        </div>
        <LoginBox onLoginPress={() => handleLoginPress()}>Login</LoginBox>
        <RegisterBox onRegisterPress={() => handleRegisterPress()}>Register</RegisterBox>
        <p className="read-the-docs">
          Copyright © 2025 by Marian Courses
        </p>
      </main>
    </div>
  )
}

export default App
