import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    height: "540px",
  },
  table: {
    minWidth: "1300px",
  },
  fixLeftCol: {
    fontSize: 14,
    textAlign: "center",
    position: "sticky",
    left: 0,
    padding: 0,
    margin: 0,
    zIndex: 2,
    backgroundColor: theme.palette.common.white,
  },
  head: {
    backgroundColor: "#222",
    color: theme.palette.common.white,
    position: "sticky",
    top: "0",
    textAlign: "center",
    zIndex: 3,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    height: "50px"
  },
  body: {
    fontSize: 14,
    textAlign: "center",
    padding: 0,
    margin: 0,
    zIndex: 1,
    width: "100px"
  },
  id: {
    backgroundColor: "#222",
    color: theme.palette.common.white,
    position: "sticky",
    left: "0",
    top: 0,
    textAlign: "center",
    zIndex: 4,
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  sub:{
    backgroundColor: "#222",
    color: theme.palette.common.white,
    position: "sticky",
    top: "50px",
    textAlign: "center",
    zIndex: 3,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    height: "35px"
  }
});
class AttendTable extends React.Component {
  constructor(props) {
    super(props)
    this.classes = props;
  }
  render() {
    let title = [<TableCell rowSpan={2} className={this.props.classes.id}>ID</TableCell>];
    let subTitle = [];
    for (let i = 0; i < this.props.lectureList.length; i++) {
      title.push(<TableCell numeric colSpan={this.props.lectureList.length-1} className={this.props.classes.head}>{this.props.lectureList[i].name}</TableCell>);
      for (let j = 0; j < this.props.lectureList[i].time.length; j++) {
        subTitle.push(<TableCell numeric className={this.props.classes.sub}>{(j === this.props.lectureList[i].time.length -1)? '正課' : '驗課#' + j}</TableCell>);
      }
    }
    title = <TableRow className={this.props.classes.head}>{title}</TableRow>;
    subTitle = <TableRow className={this.props.classes.sub}>{subTitle}</TableRow>;
    let data = [];
    for (let userNum = 0; userNum < this.props.attendList.length; userNum++) {
      let record = [<TableCell className={this.props.classes.fixLeftCol}>{this.props.attendList[userNum].name}</TableCell>];
      for (let lectureNum = 0; lectureNum < this.props.attendList[userNum].attend.length; lectureNum++) {
        for (let order = 0; order < this.props.attendList[userNum].attend[lectureNum].length; order++) {
          if (this.props.lectureTimeList[lectureNum][order] > new Date()) record.push(<TableCell></TableCell>)
          else record.push(<TableCell className={this.props.classes.body}>{(this.props.attendList[userNum].attend[lectureNum][order]) ? 'v' : 'x'}</TableCell>)
        }
      }
      data.push(<TableRow>{record}</TableRow>);
    }

    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table} height={500}>
          <TableHead>
            {title}
            {subTitle}
          </TableHead>
          <TableBody>
            {data}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

AttendTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AttendTable);