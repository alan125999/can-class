import React from 'react';
import LectureList from './lectureList.json';
import AttendList from './attendance.json';
import Table from 'rc-table';
import 'rc-table/assets/index.css';

class AttendTable extends React.Component {
  toLetters(num) {
    var mod = num % 26,
        pow = num / 26 | 0,
        out = mod ? String.fromCharCode(96 + mod) : (--pow, 'Z');
    return pow ? this.toLetters(pow) + out : out;
  }
  constructor(){
    super();
    this.columnIndex = 1;
    this.columns = [{
      title: 'Pass',
      dataIndex: this.toLetters(this.columnIndex),
      width: 50,
      key: this.toLetters(this.columnIndex++),
      fixed: 'left'
    },
    {
      title: 'ID',
      dataIndex: this.toLetters(this.columnIndex),
      width: 70,
      key: this.toLetters(this.columnIndex++),
      fixed: 'left'
    }];
    for(let i = 0; i < LectureList.length; i++){
      this.columns.push({
        title: LectureList[i].name,
        dataIndex: this.toLetters(this.columnIndex),
        colSpan: 3,
        width: 70,
        key: this.toLetters(this.columnIndex++)
      })
      for(let j = 0; j < 2; j++){
        this.columns.push({
          dataIndex: this.toLetters(this.columnIndex),
          colSpan: 0,
          width: 70,
          key: this.toLetters(this.columnIndex++)
        })
      }
    }
    this.data = [];
    let obj = {key: 0};
    let dataindex = 3;
    for(let i = 0; i < AttendList.length; i++){
      for(let j = 0; j < AttendList[i].attend.length; j++){
        for(let k = 0; k < AttendList[i].attend[j].length; k++){
          if(k !== AttendList[i].attend[j].length -1) obj[this.toLetters(dataindex++)] = "驗課#"+ (k+1);
          else obj[this.toLetters(dataindex++)] = "正課";
        }
      }
    }
    this.data.push(obj);
    let key = 2;
    for(let i = 0; i < AttendList.length; i++){
      obj = {};
      dataindex = 2;
      let passCount = 0;
      obj[this.toLetters(dataindex++)] = AttendList[i].name;
      for(let j = 0; j < AttendList[i].attend.length; j++){
        for(let k = 0; k < AttendList[i].attend[j].length; k++){
          if(AttendList[i].attend[j][k]){
            obj[this.toLetters(dataindex++)] = 'v'
            if(k === AttendList[i].attend[j].length-1) passCount++;
          }
          else obj[this.toLetters(dataindex++)] = 'x'
          obj["rowKey"] = key++;
        }
      }
      if(passCount>=2) obj["a"] = 'v';
      this.data.push(obj);
    }
  }
  render(){
    return(
      <Table
      columns={this.columns}
      scroll={{ x: 1200 }}
      data={this.data}
    />
    )
  }
}

export default AttendTable;