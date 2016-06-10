import React from 'react';
import './app.css';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render: function(){
    return (<div>Text text text</div>)
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);