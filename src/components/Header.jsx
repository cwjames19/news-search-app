import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    const keyword = event.target.value;
    this.setState( (prevState, currentProps) => { return({keyword: keyword}) } );
  }

  render() {
    console.log(this.state);
    return (
      <header className="component--header">
        <div className="header-text">Logo</div>
        <input type="text" placeholder="Search" onChange={this.inputChangeHandler}/>
      </header>
    );
  }
}

export default Header;