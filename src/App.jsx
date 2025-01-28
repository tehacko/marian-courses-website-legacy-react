import { useState } from 'react';
import { EVENTS } from './RecentEvents.js';
import { EVENT_TYPES } from './EventTypes.js'
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
  const [selectedEventType, setSelectedEventType ] = useState();

  {/* DEFAULT TAB VALUE ON LOAD - DONE IN 3 DIFFERENT WAYS*/}
  {/* FIRST ONE - NOW ACTIVE*/}	
  let eventTypeTabContent = null;

  if (selectedEventType) {
    eventTypeTabContent = (
      <div id="tab-content">
        <h3>{EVENT_TYPES[selectedEventType].title}</h3>
        <p>{EVENT_TYPES[selectedEventType].description}</p>
        <pre>
          <code>{EVENT_TYPES[selectedEventType].image}</code>
        </pre>
      </div>
    )
  }
  // THE END OF THE UPPER PART OF THE FIRST ONE - ONE MORE LINE TO GO BELOW

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
      <main id="main">
        <section>
          <p>Vítejte na portálu kurzů Marie!</p>
        </section>
        <section id="events">
          <h2>Brzy proběhne</h2>
          <ul>
            {EVENTS.map((eventItem) => <Event key={eventItem.title} {...eventItem} />)}
          </ul>
        </section>
        <section id="tab-buttons">
          <h2>Co nabízíme?</h2>
          <menu>
            <TabButton isSelected={selectedEventType === 'seminar'} onPress={() => handlePress('seminar')}>Semináře</TabButton>
            <TabButton isSelected={selectedEventType === 'webinar'}onPress={() => handlePress('webinar')}>Webináře</TabButton>
            <TabButton isSelected={selectedEventType === 'video_zaznam'}onPress={() => handlePress('video_zaznam')}>Video záznamy</TabButton>
            <TabButton isSelected={selectedEventType === 'audio_nahravka'}onPress={() => handlePress('audio_nahravka')}>Audio nahrávky</TabButton>
          </menu>
          {/* SECOND ONE */}
            {/* {!selectedEventType ? (
              null
            ) : (
              <div id="tab-content">
                <h3>{EVENT_TYPES[selectedEventType].title}</h3>
                <p>{EVENT_TYPES[selectedEventType].description}</p>
                <pre>
                  <code>{EVENT_TYPES[selectedEventType].image}</code>
                </pre>
              </div>
            )} */}
            {/* THIRD ONE */}
            {/* {!selectedEventType && null}
            {selectedEventType && (
               <div id="tab-content">
                <h3>{EVENT_TYPES[selectedEventType].title}</h3>
                <p>{EVENT_TYPES[selectedEventType].description}</p>
                <pre>
                  <code>{EVENT_TYPES[selectedEventType].image}</code>
                </pre>
              </div>
            )} */}
            {/* FIRST ONE - REVISITED */}
            {eventTypeTabContent}
            {/* THE END OF THE FIRST ONE */}
        </section>
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
