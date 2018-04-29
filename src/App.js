import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import LectureList from './lectureList.json';
import AttendList from './attendance.json';
import ClassCalender from './ClassCalender';
import ClassTimeline from './ClassTimeline';
import AttendTable from './AttendTable';

let lectureTimeList = LectureList.map((lecture) => {
  for(let i = 0; i < lecture.time.length; i++){
    lecture.time[i] = new Date(
      lecture.time[i].year,
      lecture.time[i].month - 1,
      lecture.time[i].day,
      lecture.time[i].hour,
      lecture.time[i].minute
    )
  }
  return lecture.time;
})
let eventList = [];
for (let lessonId = 0; lessonId < LectureList.length; lessonId++) {
  for (let lessonOrder = 0; lessonOrder < LectureList[lessonId].time.length; lessonOrder++) {
    eventList.push({
      id: lessonId,
      order: lessonOrder,
      time: lectureTimeList[lessonId][lessonOrder],
      isFinal: (lessonOrder === LectureList[lessonId].time.length - 1 ? true : false)
    });
  }
}
eventList.sort((a, b) => {
  return (a.time < b.time ? -1 : 1);
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <article className="container" >
          <section className="wrapper">
            <ClassCalender eventList={eventList} />
            <div className="timelineContainer" >
              <p className="timelineTitle" >Timeline</p>
              <Scrollbars style={{ height: "500px", width: "100%", backgroundColor: "white", flexGrow: "3" }}>
                <ClassTimeline eventList={eventList} lectureList={LectureList} />
              </Scrollbars>
            </div>
          </section>
          <section className="attend" style={{width: window.innerwidth}}>
            <section className="attendTitle">
              Attendance
            </section>  
            <AttendTable lectureTimeList={lectureTimeList} lectureList={LectureList} attendList={AttendList}/> 
          </section>
        </article>
        <br />
        
      </div>
    );
  }
}

export default App;
