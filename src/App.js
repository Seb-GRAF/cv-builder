import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false,
    };
  }
  handleFlip = () => {
    this.setState({
      flip: !this.state.flip,
    });
  };
  render() {
    return (
      <div className="container">
        <Header handleFlip={this.handleFlip} />
        <Main flip={this.state.flip} />
      </div>
    );
  }
}
