import React from 'react';

const NewsListItem = function({title, feed, keyword}) {
  const highlightKeyword = function(text) {
    const regExp = new RegExp("(" + keyword + ")", 'gi');
    let textArray = text.split(regExp).map( str => {
      if (str !== "" && str.toLowerCase() === keyword.toLowerCase()) {
        return(<span className="match">{str}</span>);
      } else {
        return str;
      }
    });
    return textArray;
  }

  return (
    <div className='component--news-list-item'>
      <p>{keyword !== '' ? highlightKeyword(title) : title}</p>
      <p>{keyword !== '' ? highlightKeyword(feed) : feed}</p>
    </div>
  );
}

export default NewsListItem;