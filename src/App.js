import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lessons from './Lessons'
import ShadowScrollbars from './ShadowScrollbars';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <article className="container" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", height: "20em", marginBottom: "10em"}}>
          {Lessons.renderCalender()}
          <ShadowScrollbars style={{ height: "447px", width: "320px" }}>
            {Lessons.renderTimeline()}
          </ShadowScrollbars>
        </article>
        <br/>
      </div>
    );
  }
}

export default App;
