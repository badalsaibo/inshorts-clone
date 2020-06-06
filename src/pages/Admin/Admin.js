import React, { useState, useEffect } from 'react';

import { auth } from '../../firebase/firebase.utils';

import NewsForm from '../../components/NewsForm/NewsForm';
import LogIn from '../../components/LogIn/LogIn';

const useAuth = () => {
  const currentUser = auth.currentUser;
  console.log(currentUser);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return user;
};

const Admin = ({ setNews, news }) => {
  const user = useAuth();

  if (user) {
    return (<NewsForm setNews={setNews} news={news} />);
  }

  return (
    <LogIn />
  );
};

export default Admin;