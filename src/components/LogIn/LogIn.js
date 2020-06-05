import React, { useState } from 'react';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as LockIcon } from '../../svg/lock.svg';

import './LogIn.scss';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handle login');
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error signing in');
    }
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