import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = event => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const { review, deleteReview } = this.props;
    
    return (
      <div>
        {review.text}
        <button onClick={this.handleOnClick} > X </button>
      </div>
    );
  }

};

export default Review;
