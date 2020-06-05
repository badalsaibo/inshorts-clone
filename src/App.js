import React, { useState, useEffect } from 'react';
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
    <div>
      {
        news.map((a) => <h1 key={a.id}>{a.title}</h1>)
      }
    </div>
  );
}

export default App;
