import React from 'react';

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: {}
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => {return res.json()})
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  getResult() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      console.log(this.props + ":" + error);
    } else if (!isLoaded) {
      console.log(this.props + ": Loading...");
    } else {
      return (
        this.state.result
      );
    }
  }
}

export default FetchData;