import React from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
import DOMPurify from 'dompurify';
//components
import Header from './components/Header';
import NewsList from './components/NewsList';
//styles
import './styles/css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: JSON,
      filtered: [],
      keyword: '',
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler = function(event) {
    const keywordDirty = event.target.value;
    //santitize user input
    const keywordClean = DOMPurify.sanitize(keywordDirty);
    const reg = new RegExp(keywordClean.toLowerCase());
    //filter news articles which match keyword
    const filtered = this.state.news.filter( item => {
      return (reg.test(item.title.toLowerCase()) || reg.test(item.feed.toLowerCase()));
    });
    this.setState( (prevState, currentProps) => {return({keyword: keywordClean, filtered: filtered})} );

  };

  render() {
    return(
      <div>
        <Header inputChangeHandler={this.inputChangeHandler}/>
        {/* show all news items if no search term is given */}
        <NewsList keyword={this.state.keyword} filtered={this.state.keyword === '' ? this.state.news : this.state.filtered} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));