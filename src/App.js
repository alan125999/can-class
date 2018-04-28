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

          <section style={{ display: "-webkit-flex", flexFlow: "row wrap", justifyContent: "center"}}>
            {Lessons.renderCalender()}
            <div style={{ display: "flex", flexFlow: "column wrap", justifyContent: "flex-start", height: "100%", width: "320px", flexGrow: 1}}>
              <p style={{ color: "white", fontSize: "2em", backgroundColor: "rgb(76, 172, 255)", margin: "0", height: "147px", lineHeight: "147px", width: "100%"}}>Timeline</p>
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
