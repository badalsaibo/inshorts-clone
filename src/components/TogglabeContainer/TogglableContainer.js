import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as AddIcon } from '../../svg/plus.svg';
import { ReactComponent as ShareIcon } from '../../svg/share.svg';

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
              <a target="_blank" rel="noopener noreferrer" href={sourceUrl}>{sourceName}</a>
            </div>
          )
      }

      <div className={`news-footer news-footer--hide ${ toggle ? 'news-footer--show' : '' }`}>
        <div className="news-footer__share">
          <ShareIcon />
        </div>

        <Link to='/admin' className="news-footer__add">
          <AddIcon />
        </Link>
      </div>
    </div>
  );
};

export default TogglableContainer;