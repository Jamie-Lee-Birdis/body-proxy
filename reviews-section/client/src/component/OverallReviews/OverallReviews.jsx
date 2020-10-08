import React from "react";
import Review from "./Review.jsx";
import DynamicHeader from "./DynamicHeader.jsx";
import styled from 'styled-components'

var OverallReviews = ({ reviews, count, voteHandler, modalToggler }) => {

  return (
    <div>
      <Wrapper>
        <DynamicHeader timeFrame={'Overall'}/>
      </Wrapper>
      <Review review={reviews[0]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[1]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[2]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[3]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[4]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[5]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[6]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[7]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[8]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <Review review={reviews[9]} voteHandler={voteHandler} modalToggler={modalToggler} />
      <LinkWrap> <Link href="#">Browse all {count} reviews</Link></LinkWrap>
    </div>
  );
}
export default OverallReviews;

const Wrapper = styled.div`
  padding-bottom:5px;
`;

const LinkWrap = styled.div`
  margin: auto;
  text-align: center;
`;

const Link = styled.a`
  color: #ffffff;
  &:hover {
    color: #66c0f4;
  }
  font-size: 12px;
  margin: auto;
  text-decoration: none;
`;