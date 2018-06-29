import React from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
//components
import Header from './components/Header';
import NewsList from './components/NewsList';
//styles
import './styles/css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: JSON
    }
  }
  render() {
    return(
      <div>
        <Header />
        <NewsList news={this.state.news}>
          <h1>AND NOW FOR THE NEWS!!</h1>
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));