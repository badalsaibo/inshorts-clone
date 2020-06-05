import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import News from './components/News/News';
import LogIn from './components/LogIn/LogIn';

import { fetchNews } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      setNews(await fetchNews());
    })();
  }, []);

  if (news.length === 0) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <Switch>

      <Route path='/login'>
        <LogIn />
      </Route>

      <Route path='/'>
        <div className="app-container">
          {
            news.map((eachNews) =>
              <News key={eachNews.id} news={eachNews}/>
            )
          }
        </div>
      </Route>

    </Switch>
  );
}

export default App;
