import React from "react";

const Rating = ({ rating }) => {
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      star.push(<span>★</span>);
    } else {
      star.push(<span>✩</span>);
    }
  }
  return <div>{star} </div>;
};
export default Rating;
