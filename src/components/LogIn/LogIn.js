import React, { useState } from 'react';
import { ReactComponent as LockIcon } from '../../svg/lock.svg';

import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('handle login');
  };

  return (
    <div className="login">
      <div className="login__icon"><LockIcon /></div>
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