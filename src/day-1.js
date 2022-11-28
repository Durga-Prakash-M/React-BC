import React from "react";

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { partOfDay: null, time: null };
  }
  render() {
    this.setState({ partOfDay: getGreeting() });
    return (
      <div>
        <h1>
          Hello, {this.props.name}. Good {this.state.partOfDay}.
        </h1>
      </div>
    );
  }
}

function getGreeting() {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return "Morning";
  } else if (curHr < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
}

export default Greetings;
