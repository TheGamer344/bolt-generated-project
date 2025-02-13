import React, { useState } from 'react';

function Login({ onLogin }) {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input) {
      onLogin(input);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
