import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import News from './components/News/News';
import Spinner from './components/Spinner/Spinner';

import Admin from './pages/Admin/Admin';

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
      <Spinner />
    );
  }

  return (
    <Switch>

      <Route path='/admin'>
        <Admin setNews={setNews} />
      </Route>

      <Route path='/'>
        <div className="app-container" style={ typeof window.orientation !== 'undefined' ? { height: window.innerHeight } : {}}>
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
