import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
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
          <label htmlFor="review">Review: </label>
          <input
            type="text"
            name="review"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
