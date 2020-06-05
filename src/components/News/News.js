import React from 'react';

import TogglableContainer from '../TogglabeContainer/TogglableContainer';

import './News.scss';

const News = ({ news }) => {
  const { title, summary, imageUrl } = news;
  return (
    <TogglableContainer news={news}>
      <div className="news">
        <div className="news__image" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="news-content">
          <h2 className="news__title">{title}</h2>
          <p className="news__summary">{summary}</p>
        </div>
      </div>
    </TogglableContainer>
  );
};

export default News;