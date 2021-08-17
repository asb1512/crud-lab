import React, { Component } from "react";

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="restaurant-name">Restaurant Name: </label>
          <input
            type="text"
            name="restaurant-name"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
