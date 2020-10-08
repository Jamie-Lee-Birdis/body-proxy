import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Avatar from '../Reusable/Avatar.jsx';
import Thumbs from '../Reusable/Thumbs.jsx';
import BtnHelpful from '../Reusable/BtnHelpful.jsx';
import BtnUnHelpful from '../Reusable/BtnUnHelpful.jsx';
import BtnFunny from '../Reusable/BtnFunny.jsx';
import BtnAward from '../Reusable/BtnAward.jsx';
import MetaContainer from '../Reusable/MetaContainer.jsx';



var Review = ({ review, voteHandler, modalToggler }) => {
  if (review) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var reviewDate = new Date(review.createdAt);
    reviewDate = months[reviewDate.getMonth()] + ' ' + reviewDate.getDate();
    return (
      <Wrapper>
        <MainBody>
          <Left>
            <Avatar avatar={review.User.avatar} height='32' width='32' />
            <InlineUser>
              <Username>{review.User.Username}</Username>
              <GamesCount>{review.User.games_owned_count} products in account</GamesCount>
            </InlineUser>
            <ReviewCount>{review.User.reviews_count} reviews</ReviewCount>
          </Left>
          <Right>
            <Stats>
              <Thumbs thumb={review.recommended} dim='40'/>
              <Icon src={'https://review-assets.s3.us-east-2.amazonaws.com/icon_review_steam.png'} alt="Product purchased directly from Steam" />
              <Title>{(review.recommended) ? 'Recommended' : 'Not Recommended' }</Title>
              <Hours>{review.User_game.time_played} hours played</Hours>
            </Stats>
            <PostedDate>POSTED: {reviewDate}</PostedDate>
            <Content>
              {review.body}
            </Content>
            <Hr />
            <div>
              <HelpfulAsk>Was this review helpful?</HelpfulAsk>
              <Controls>
                <BtnHelpful id={review.id} voteHandler={voteHandler} />
                <BtnUnHelpful id={review.id} voteHandler={voteHandler} />
                <BtnFunny id={review.id} voteHandler={voteHandler} />
                <BtnAward id={review.id} modalToggler={modalToggler} />
              </Controls>
              <VoteInfo>
                < MetaContainer id={review.id} helpful={review.helpful_count} funny={review.funny_count} awards={review.awards} modalToggler={modalToggler} />
              </VoteInfo>
            </div>
          </Right>
          <ClearFloats></ClearFloats>
        </MainBody>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Review;


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
  left: 53px;
  opacity: 0.6;
  position: absolute;
  top: 29px;
`;

const Hr = styled.hr`
  border: #363f4c solid 1px;
  border-bottom: 0;
`;

const Icon = styled.img`
  float: right;
  max-height: 16px;
  margin-right: 5px;
  margin-top: 12px;
  opacity: 0.5;
  max-width: 16px;
`;

const InlineUser = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Left = styled.div`
  width: 184px;
  float: left;
  padding: 8px;
  opacity: 0.6;
`;

const MainBody = styled.div`
  background-color: #16202d;
  border-bottom: 1px solid #000000;
  color: #c1dbf4;
  font-family: Arial;
  font-size: 15px;
  max-width: 616px;
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
  background-color: #121b24;
  margin: 8px 0 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Username = styled.div`
  color: #c1dbf4;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  margin-top: 0px;
  margin-top: -2px;
  margin-bottom: -1px;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 140px;
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

const PostedDate = styled.div`
  margin: 0px 0px 8px;
  font-size: 10px;
  text-transform: uppercase;
  font-style: normal;
  color: #8091a2;
  display: inline-block;
  opacity: 0.6;
`;

const VoteInfo = styled.div`
  color: #647580;
  font-size: 12px;
  margin-bottom: 26px;
  min-height: 16px;
  padding: 0px 9px 8px 0px;
`;

const Wrapper = styled.div`
  background: linear-gradient(to right, #3a6e8b, #16202d );
  margin-bottom: 26px;
  padding-top: 1px;
`;