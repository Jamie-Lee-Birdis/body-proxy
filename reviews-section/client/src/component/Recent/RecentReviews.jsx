import React from "react";
import styled from 'styled-components'
import RecentReview from "./RecentReview.jsx";


const Wrapper = styled.div`
`;

const Heading = styled.div`
  color: #FFF;
  font-size: 14px;
  text-transform: uppercase;
  padding-bottom:5px;
`;

var RecentReviews = ({ reviews, voteHandler, awardHandler, modalToggler }) => {
  var recentlyPosted = [];
  if (Array.isArray(reviews) && reviews.length > 0) {
    reviews.forEach((review, key) => {
      recentlyPosted.push(<RecentReview review={review} key={ key} modalToggler={ modalToggler } voteHandler={ voteHandler } awardHandler={ awardHandler } />)
    });
    recentlyPosted = recentlyPosted.slice(0, 11);
  }
  return (
    <Wrapper>
      <Heading>Recently Posted</Heading>
      {recentlyPosted}
    </Wrapper>
  );
}

export default RecentReviews;