import React, { Component } from "react";

class Counter extends Component {
  state = {
    visible: true,
    name: "Marcel",
    count: 0,
    imageUrl: "https://picsum.photos/80",
    shoppingList: ["cosa", "mariposa", "hehe", "plat", "cosa2"]
  };

  styles = {
    fontSize: "50px",
    fontWeight: "bold"
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderSomething() {
    return (
      <div>
        {this.state.shoppingList.length > 4 && "a lot of items!"}
        <img src={this.state.imageUrl} alt="" />
        <h1 style={this.styles}>Hi, {this.state.name}.</h1>
        <h2 style={{ color: "red" }}>let's see...</h2>
        <span className={this.getBadgeClasses()}>
          You have {this.formatCount()} items left.
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <h3>Shopping List</h3>
        <ul>
          {this.state.shoppingList.map(item => (
            <li key={item}>Item: {item}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "no" : count;
  }
  render() {
    if (this.state.visible)
      return <React.Fragment>{this.renderSomething()}</React.Fragment>;
    return <p>invisible</p>;
  }
}

export default Counter;
