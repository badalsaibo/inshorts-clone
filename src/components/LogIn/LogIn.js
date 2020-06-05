import React, { useState } from 'react';

import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('handle login');
  };

  return (
    <div className="login">
      <h2 className="login__heading">Login</h2>
      <form className="login__form-group" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LogIn;