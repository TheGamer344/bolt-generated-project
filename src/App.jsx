import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Login from './components/Login';
import Calendar from './components/Calendar';

function App() {
  const [username, setUsername] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="container">
      <div className="theme-toggle" onClick={toggleTheme}>
        {isLightMode ? <FaMoon /> : <FaSun />}
      </div>
      {username ? (
        <>
          <h1>Welcome, {username}!</h1>
          <Calendar />
        </>
      ) : (
        <Login onLogin={setUsername} />
      )}
    </div>
  );
}

export default App;
