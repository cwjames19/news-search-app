import React from 'react';
//components
import NewsListItem from './NewsListItem';


const NewsList = function({keyword, filtered}) {
  const items = filtered.map( item => <NewsListItem title={item.title} feed={item.feed} keyword={keyword} key={item.id} /> )
  return (
    items.length === 0 ?
      <h3>Sorry, no articles with your search term were found.</h3>
    :
      <main className="component--news-list">
        <div>{ items }</div>
      </main>
  );
}

export default NewsList;