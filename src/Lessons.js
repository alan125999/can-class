import React from 'react';
import LectureList from './lectureList.json';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import './Lessons.css'

class Lessons extends React.Component {
  paddingLeft(str, length) {
    str = str.toString();
    if (str.length >= length) return str;
    else return this.paddingLeft("0" + str, length);
  }
  myDateString(date) {
    return date.getFullYear() + "年"
      + this.paddingLeft((date.getMonth() + 1).toString(), 2) + "月"
      + this.paddingLeft(date.getDate().toString(), 2) + "日"
      + ' 星期' + '日一二三四五六'.charAt(date.getDay()) + " "
      + date.toTimeString().slice(0, 5);
  }
  lessonColor(isFinal) {
    return (isFinal === true) ? "#ff6699" : "#33cc33";
  }
  constructor() {
    super()
    this.list = Array(0);
    for (let lessonId = 0; lessonId < LectureList.length; lessonId++) {
      for (let lessonOrder = 0; lessonOrder < LectureList[lessonId].time.length; lessonOrder++) {
        this.list.push({
          id: lessonId,
          order: lessonOrder,
          time: new Date(
            LectureList[lessonId].time[lessonOrder].year,
            LectureList[lessonId].time[lessonOrder].month - 1,
            LectureList[lessonId].time[lessonOrder].day,
            LectureList[lessonId].time[lessonOrder].hour,
            LectureList[lessonId].time[lessonOrder].minute
          ),
          isFinal: (lessonOrder === LectureList[lessonId].time.length - 1 ? true : false),
        });
      }
    }
    this.list.sort((a, b) => {
      return (a.time < b.time ? -1 : 1);
    });
  }
  renderTimeline() {
    this.listTimeline = this.list.map((lesson) => {
      return <TimelineEvent
        // component properties
        title={this.myDateString(lesson.time)}
        iconColor={this.lessonColor(lesson.isFinal)}
        container="card"
        subtitleStyle={{ color: "white" }}
        cardHeaderStyle={{ backgroundColor: this.lessonColor(lesson.isFinal), color: "white" }}
        // others attibutes
        key={lesson.id + "," + lesson.order}
      >
        課程：{LectureList[lesson.id].name} <br />
        性質：{(lesson.isFinal === true ? "正課" : ("第 " + (lesson.order + 1) + " 次驗課"))} <br />
        講師：{LectureList[lesson.id].lecturer}
      </TimelineEvent>;
    });
    return (
      <Timeline>
        {this.listTimeline}
      </Timeline>
    );
  }
  myMultipleDateInterpolation(date, selected) {
    return selected;
  }
  renderCalender() {
    let finalTime = Array(0);
    let time = this.list.map((lesson) => {
      if (lesson.isFinal) finalTime.push(lesson.time.getFullYear() + '-' + this.paddingLeft((lesson.time.getMonth()+1 ),2)+ '-' + this.paddingLeft(lesson.time.getDate(),2));
      return lesson.time;
    })

    return (<InfiniteCalendar
      Component={withMultipleDates(Calendar)}
      selected={time}
      interpolateSelection={this.myMultipleDateInterpolation}
      width={"100%"}
      height={"auto"}
      rowHeight={100}
      className="myCal"
      min={this.list[0].time}
      max={this.list[this.list.length - 1].time}
      minDate={this.list[0].time}
      maxDate={this.list[this.list.length - 1].time}
      theme={{
        selectionColor: date => {
          let dateObj = date.toString().split('-');
          dateObj = new Date(dateObj[0], dateObj[1] - 1, dateObj[2],23, 59);
          let now = new Date();
          if (dateObj < now) return "gray";
          return this.lessonColor(finalTime.includes(date));
        },
      }}
    />);
  };
}
let obj = new Lessons();
export default obj;
