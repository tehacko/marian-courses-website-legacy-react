import './App.css';
import Header from './components/Header/Header.jsx';
import Button from './components/Button.jsx';
import Events from './components/Events.jsx';
import EventTypes from './components/EventTypes.jsx';
import LoginBox from './components/LoginBox.jsx';
import RegisterBox from './components/RegisterBox.jsx';


export const user = {
  username: '',
  email: '',
  password: '',
  registered: false,
  loggedIn: false,
};

function App() {

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
    <>
      <Header />  
      <main id="main">
        <p>Vítejte na portálu kurzů Marie!</p>
        <Events />
        <EventTypes />
        <LoginBox onLoginPress={() => handleLoginPress()}>Login</LoginBox>
        <RegisterBox onRegisterPress={() => handleRegisterPress()}>Register</RegisterBox>
        <p className="copyright-information">
          Copyright © 2025 by Marian Courses
        </p>
      </main>
    </>
  );
}

export default App
