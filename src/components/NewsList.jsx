import React from 'react';
//components
import NewsItem from './NewsListItem';


const NewsList = function(props) {
  const items = props.news.map( item => <NewsItem item={item} key={item.id} /> );

  return (
    <main className="component--news-list">
      {/* {props.children} */}
      <div>{ items }</div>
    </main>
  );
}

export default NewsList;