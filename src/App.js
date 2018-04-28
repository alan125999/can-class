import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lessons from './Lessons';
import { Scrollbars } from 'react-custom-scrollbars';
import AttendTable from './AttendTable';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <article className="container" >
          {/* <section style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", height: "20em", marginBottom: "10em" }}>
            <ShadowScrollbars style={{ height: "447px", width: "25%", backgroundColor: "rgb(76, 148, 255)"}}>
              {Lessons.renderTimeline()}
            </ShadowScrollbars>
            {Lessons.renderCalender()}
          </section> */}

          <section className="wrapper">
            {Lessons.renderCalender()}
            <div className="timelineContainer" >
              <p className="timelineTitle" >Timeline</p>
              <Scrollbars style={{ height: "500px", width: "100%", backgroundColor: "white", flexGrow: "3" }}>
                {Lessons.renderTimeline()}
              </Scrollbars>
            </div>
          </section>
          <section>
            <AttendTable />
          </section>
        </article>
        <br />
      </div>
    );
  }
}

export default App;
