import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { lessonColor, myDateString } from './utils'

class ClassTimeline extends React.Component {
  render() {
    let events = this.props.eventList.map((lesson) => {
      return <TimelineEvent
        // component properties
        title={myDateString(lesson.time)}
        iconColor={(lesson.time < new Date())? 'gray' : lessonColor(lesson.isFinal)}
        container="card"
        subtitleStyle={{ color: "white" }}
        cardHeaderStyle={{ backgroundColor: (lesson.time < new Date())? 'gray' : lessonColor(lesson.isFinal), color: "white" }}
        // others attibutes
        key={lesson.id + "," + lesson.order}
      >
        課程：{this.props.lectureList[lesson.id].name} <br />
        性質：{(lesson.isFinal === true ? "正課" : ("第 " + (lesson.order + 1) + " 次驗課"))} <br />
        講師：{this.props.lectureList[lesson.id].lecturer} <br/>
        地點：{(lesson.isFinal === true ? this.props.lectureList[lesson.id].place : "CBB")}
      </TimelineEvent>;
    });
    return (
      <Timeline>
        {events}
      </Timeline>
    );
  }
}
export default ClassTimeline;