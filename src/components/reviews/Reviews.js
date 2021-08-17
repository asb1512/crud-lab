import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { reviews, deleteReview } = this.props;
    const filteredReviewList = reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviewList = filteredReviewList.map((review) => {
      
      return (
        <li key={review.id}>
          <Review
            key={review.id}
            review={review}
            deleteReview={this.props.deleteReview}
          />
        </li>
      );
    });

    return (<ul>{reviewList}</ul>);
  }
}

export default Reviews;
