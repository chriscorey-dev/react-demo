import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProtectedPage from "./ProtectedPage";

class Test extends Component {
  state = {
    data: null
  };

  // Authentication: is stating that you are who are you are
  // Authorization: is asking if you have access to a certain resource.

  componentDidMount() {
    // const url = "https://api.myjson.com/bins/powmo";
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    if (!this.state.data) return <div className="container">Loading...</div>;

    return (
      <div className="container">
        <p>{JSON.stringify(this.state.data[0])}</p>
        {this.state.data.map(person => (
          <p key={person.id}>{person.name}</p>
        ))}
        <ProtectedPage />
        <Link to="/protected-page">Protected Page</Link>
      </div>
    );
  }
}

export default Test;
