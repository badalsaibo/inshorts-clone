import React, { useState } from 'react';

import './TogglableContainer.scss';

const TogglableContainer = ({ children, news }) => {
  const { sourceUrl, sourceName, author, time, date } = news;

  const [toggle, setToggle] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="news-container" onClick={handleToggle}>
      {children}

      {
        toggle
          ? (
            <div className="news-author">
              Short by {author} | {time} on {date}
            </div>
          )
          : (
            <div className="news-source">
              tap for more at &nbsp;
              <a href={sourceUrl}>{sourceName}</a>
            </div>
          )
      }

      <div className="news-share">
        share it
      </div>
    </div>
  );
};

export default TogglableContainer;