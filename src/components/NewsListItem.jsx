import React from 'react';
import { css } from 'glamor';

const NewsListItem = function({item}) {

  return (
    <div className={`component--news-list-item`}>
      <p>{item.title}</p>
      <p>{item.feed}</p>
    </div>
  );
}

export default NewsListItem;