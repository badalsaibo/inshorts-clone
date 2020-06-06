import React, { useState } from 'react';

import './NewsForm.scss';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [date, setDate] = useState('');
  const [sourceName, setSourceName] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="news-form">
      <h2 className="news-form__heading">News Form</h2>
      <form className="news-form-group" onClick={handleSubmit}>
        <input type="text" value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={summary}
          placeholder="max 60 - 65 words"
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>

        <input type="text" value={author}
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="text" value={date}
          placeholder="02 Jan 2020, Friday"
          onChange={(e) => setDate(e.target.value)}
        />
        <input type="text" value={sourceName}
          placeholder="sourceName"
          onChange={(e) => setSourceName(e.target.value)}
        />
        <input type="text" value={sourceUrl}
          placeholder="sourceUrl"
          onChange={(e) => setSourceUrl(e.target.value)}
        />
        <input type="text" value={imageUrl}
          placeholder="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewsForm;