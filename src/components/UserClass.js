import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Delhi",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/harsh-sindhav");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @HarshSindhav3</h4>
      </div>
    );
  }
}

export default UserClass;
