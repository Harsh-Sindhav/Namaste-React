import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>

        <UserClass name={"Harsh Sindhav (Class)"} location={"Delhi Class"} />
      </div>
    );
  }
}

export default About;
