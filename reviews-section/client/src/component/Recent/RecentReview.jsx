import React from 'react';
import styled from 'styled-components'
import Thumbs from '../Reusable/Thumbs.jsx'
import BtnHelpful from '../Reusable/BtnHelpful.jsx'
import BtnUnHelpful from '../Reusable/BtnUnHelpful.jsx'
import BtnFunny from '../Reusable/BtnFunny.jsx'
import BtnAward from '../Reusable/BtnAward.jsx'
import MetaContainer from '../Reusable/MetaContainer.jsx'

var RecentReview = ({ review, voteHandler, awardHandler, modalToggler }) => {
  if (review) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var reviewDate = new Date(review.createdAt);
    reviewDate = months[reviewDate.getMonth()] + ' ' + reviewDate.getDate()
    return (
      <Wrapper>
        <Stats>
          <Thumbs thumb={review.recommended} dim='21'/>
          <Username>{review.User.Username}</Username>
          <Icon src="https://review-assets.s3.us-east-2.amazonaws.com/icon_review_steam.png" alt="Product purchased directly from Steam"  />
          <Hours>{review.User_game.time_played} hrs</Hours>
        </Stats>
        <Right>
          <PostedDate>POSTED: {reviewDate}</PostedDate>
          <Content>
            {review.body}
          </Content>
          <Hr />
          <div>
            <HelpfulAsk>Helpful?</HelpfulAsk>
            <Controls>
              <BtnHelpful id={review.id} voteHandler={voteHandler} />
              <BtnUnHelpful id={review.id} voteHandler={voteHandler} />
              <BtnFunny id={review.id} voteHandler={voteHandler} />
              <BtnAward id={review.id} modalToggler={modalToggler} />
            </Controls>
            <VoteInfo>
              < MetaContainer id={review.id} modalToggler={modalToggler} awards={review.awards} helpful={review.helpful_count} funny={review.funny_count} />
            </VoteInfo>
          </div>
        </Right>
        <ClearFloats></ClearFloats>
      </Wrapper>
    );
  } else {
    return null;
  }
};
export default RecentReview;


const ClearFloats = styled.div`
clear: both;
`;

const Content = styled.div`
color: #acb2b8;
`;

const Controls = styled.div`
padding: 10px 0 5px;
`;

const GamesCount = styled.div`
font-size: 11px;
display: block;
line-height: 17px;
`;

const HelpfulAsk = styled.div`
display: inline-block;
margin-right: 9px;
color: #8091a2;
font-size: 12px;
opacity: 0.6;
`;

const Hours = styled.div`
color: #8091a2;
font-size: 11px;
left: 50%;
opacity: 0.6;
position: absolute;
top: 8px;
`;

const Hr = styled.hr`
border: #000 solid 1px;
border-bottom: 0;
max-width: 300px;
margin: 10px auto 10px 0;
`;

const Icon = styled.img`
float: right;
height: 16px;
margin-right: 5px;
margin-top: -8px;
opacity: 0.5;
position: absolute;
right: 5px;
top: 50%;
max-width: 16px;
`;

const PostedDate = styled.div`
margin: 0px 0px 8px;
font-size: 10px;
text-transform: uppercase;
font-style: normal;
color: #8091a2;
display: inline-block;
opacity: 0.6;
`;

const ReviewCount = styled.div`
font-size: 11px;
display: block;
`;

const Right = styled.div`
color: #8091a2;
float: left;
margin-left: 14px;
position: relative;
max-width: 400px;
`;

const Stats = styled.div`
background-color: rgba(0,0,0,0.3);
margin: 0 0 6px;
overflow: hidden;
position: relative;
text-overflow: ellipsis;
white-space: nowrap;
`;

const Title = styled.div`
color: #d6d7d8;
font-size: 16px;
font-family: Arial;
font-weight: normal;
line-height: 19px;
padding: 3px 0px 0px 0px;
position: absolute;
top: 6px;
left: 53px;
max-width: 328px;
`;

const Username = styled.span`
color: #819db8;
font-size: 12px;
margin-top: 5px;
// margin-left: 6px;
max-width: 120px;
overflow: hidden;
position: absolute;
text-overflow: ellipsis;
white-space: nowrap;
`;

const VoteInfo = styled.div`
color: #647580;
font-size: 12px;
margin-bottom: 26px;
min-height: 16px;
padding: 0px 9px 8px 0px;
`;

const Wrapper = styled.div`
background: linear-gradient(to right, #213143, rgba(0,0,0,0) );
margin-bottom: 26px;
padding-top: 1px;
position: relative;
`;