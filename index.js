import React, { Component } from "react";
import ReactDOM from "react-dom";

import Sidemenu from "./components/sidemenu";
import Content from "./components/content";

import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

class App extends Component {
  state = {
    username: "John Doe",
    shortUserName: "JD",
    role: "Premium Nomad"
  };

  render = () => {
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <Sidemenu
              username={this.state.username}
              shortUserName={this.state.shortUserName}
              role={this.state.role}
            />
            <Content />
          </div>
        </div>
      </div>
    );
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
