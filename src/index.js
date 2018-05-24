import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import NewsList from './components/NewsList';

//styles
import './styles/css/index.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <NewsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));