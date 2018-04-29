import React from 'react';
import InfiniteCalendar, { Calendar, withMultipleDates } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import { paddingLeft, lessonColor } from './utils'

class ClassCalender extends React.Component {
  myMultipleDateInterpolation(date, selected) {
    return selected;
  }
  render() {
    let finalTime = [];
    let time = this.props.eventList.map((lesson) => {
      if (lesson.isFinal) finalTime.push(lesson.time.getFullYear() + '-' + paddingLeft((lesson.time.getMonth() + 1), 2) + '-' + paddingLeft(lesson.time.getDate(), 2));
      return lesson.time;
    })

    return (<InfiniteCalendar
      width={"100%"}
      height={500}
      rowHeight={100}
      Component={withMultipleDates(Calendar)}
      selected={time}
      interpolateSelection={this.myMultipleDateInterpolation}
      min={this.props.eventList[0].time}
      max={this.props.eventList[this.props.eventList.length - 1].time}
      minDate={this.props.eventList.time}
      maxDate={this.props.eventList[this.props.eventList.length - 1].time}
      theme={{
        selectionColor: date => {
          let dateObj = date.toString().split('-');
          dateObj = new Date(dateObj[0], dateObj[1] - 1, dateObj[2]);
          for (let i = 0; i < this.props.eventList.length; i++) {
            if (this.props.eventList[i].time > dateObj) {
              dateObj = this.props.eventList[i].time;
              break;
            }
          }
          if (dateObj < new Date()) return "gray";
          return lessonColor(finalTime.includes(date));
        },
      }}
    />);
  }
}

export default ClassCalender;