import React, { useState, useEffect } from 'react';

import News from './components/News/News';

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
    <div className="app-container">
      {
        news.map((eachNews) =>
          <News key={eachNews.id} news={eachNews}/>
        )
      }
    </div>
  );
}

export default App;
