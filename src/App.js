import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline, TimelineEvent } from 'react-event-timeline'

class ClassTimeLine extends React.Component {
  paddingLeft(str,length){
    if(str.length >= length) return str;
    else return this.paddingLeft("0"  + str,length);
  }
  render() {
    const lectureList = [{
      name: "FreeBSD + Firewall",
      time: [new Date(2018, 3, 29, 2, 0), new Date(2018, 4, 7, 22, 0), new Date(2018, 4, 10, 18, 30)],
      lecturer: "Alan"
    }, {
      name: "Mail + DNS",
      time: [new Date(2018, 4, 6, 14, 0), new Date(2018, 4, 14, 22, 0), new Date(2018, 4, 18, 18, 30)],
      lecturer: "Setsal"
    }, {
      name: "網頁伺服器架設與PHP+MySQL (一)",
      time: [new Date(2018, 4, 15, 22, 0), new Date(2018, 4, 20, 22, 0), new Date(2018, 4, 22, 18, 30)],
      lecturer: "Anan"
    }, {
      name: "網頁伺服器架設與PHP+MySQL (二)",
      time: [new Date(2018, 4, 19, 22, 0), new Date(2018, 4, 27, 14, 0), new Date(2018, 4, 31, 18, 30)],
      lecturer: "Anan"
    }];

    let lessons = Array(0);
    for(let i = 0; i < lectureList.length; i++){
      for(let j = 0; j < lectureList[i].time.length; j++){
        lessons.push(
          <TimelineEvent 
            // component properties
            // title={lectureList[i].name + (j === lectureList[i].time.length - 1 ? " 正課" : (" 第 " + ( j + 1 ) + " 次驗課"))} 
            // subtitle={"講師：" + lectureList[i].lecturer} 
            createdAt={lectureList[i].time[j].getFullYear() + "年" 
                     + this.paddingLeft((lectureList[i].time[j].getMonth() + 1).toString(), 2) + "月" 
                     + this.paddingLeft(lectureList[i].time[j].getDate().toString(), 2) + "日" 
                     + ' 星期' + '日一二三四五六'.charAt(lectureList[i].time[j].getDay()) + " " 
                     + lectureList[i].time[j].toTimeString().slice(0, 5)} 
            iconColor={(j === lectureList[i].time.length - 1) ? "#ff6699" : "#33cc33"}
            container="card"
            subtitleStyle={{color: "white"}}
            cardHeaderStyle={{backgroundColor:( j === lectureList[i].time.length - 1 )? "#ff6699" : "#33cc33", color: "white"}}
            // others attibutes
            key = {i.toString() + "," + j.toString()}
            time = {lectureList[i].time[j]}
          >
            課程：{lectureList[i].name + (j === lectureList[i].time.length - 1 ? " 正課" : (" 第 " + ( j + 1 ) + " 次驗課"))} <br/>
            {"講師：" + lectureList[i].lecturer} 
          </TimelineEvent>
        )
      }
    }

    lessons.sort((a, b) => {
      return (a.props.time < b.props.time? -1 : 1);
    });

    return (
      <Timeline>
        {lessons}
      </Timeline>
    );
  }
}
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
        <div style={{width: "25em"}}>
          <ClassTimeLine />
        </div>
      </div>
    );
  }
}

export default App;
