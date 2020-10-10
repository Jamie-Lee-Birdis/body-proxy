import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header/Header.jsx';
import ResultsSummary from './FilterInfo/ResultsSummary.jsx';
import OverallReviews from './OverallReviews/OverallReviews.jsx';
import RecentReviews from './Recent/RecentReviews.jsx';
import Modal from './Reusable/Modal/Modal.jsx';

var App = function(props) {

  const [data, setData] = useState({ reviews: [] });
  const [recent, setRecent] = useState({ reviews: [] });
  const [score, setScore] = useState('');
  const [recentScore, setRecentScore] = useState('');
  const [count, setCount] = useState(0);
  const [recentCount, setRecentCount] = useState(0);
  const [modal, setModal] = useState(null);
  const [awardSelected, setAward] = useState(null);

  const scoreInterpreter = (score) => {
    var summary = '';
    if (score || score === 0) {
      if (score > 95) {
        summary = 'Overhwelmingly Positive';
      } else if (score > 80) {
        summary = 'Very Positive';
      } else if (score > 70) {
        summary = 'Mostly Positive';
      } else if (score > 40) {
        summary = 'Mixed';
      } else if (score > 20) {
        summary = 'Mostly Negative';
      } else {
        summary = 'Overwhelmingly Negative';
      }
    }
    return summary;
  };

  const reviewProccesor = (reviews = []) => {

    var totalReviews = reviews.length;
    var recommendedCount = 0;
    var recentlyRecommendedCount = 0;
    var recentlyPosted = [];
    if (Array.isArray(reviews) && reviews.length > 0) {
      reviews.forEach((review, key) => {
        if (review.recommended) {
          recommendedCount++;
        }
        review.awards = JSON.parse(review.awards);
        var reviewDate = new Date(review.createdAt);
        var timePast = Date.now() - reviewDate;
        var timePastInDays = timePast / 86400000;
        if (timePastInDays < 365) {
          recentlyPosted.push(review);
          if (review.recommended) {
            recentlyRecommendedCount++;
          }
        }
      });
      setRecentCount(recentlyPosted.length);
      recentlyPosted = recentlyPosted.slice(0, 11);
    }
    setData(reviews);
    setRecent(recentlyPosted);

    var score = Math.floor(recommendedCount / totalReviews * 100);
    var summary = scoreInterpreter(score);
    setCount(totalReviews);
    setScore(summary);
    var recentScore = Math.floor(recentlyRecommendedCount / recentlyPosted.length * 100);
    var recentSummary = scoreInterpreter(recentScore);
    setRecentScore(recentSummary);
  };

  useEffect(() => {
    var search = window.location.search;
    var query = search.replace(/id/gi, 'gameID');
    axios.get(`/moist-air/reviews${query}`)
      .then(function (response) {
        reviewProccesor(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const voteHandler = (id, key, value) => {
    axios.patch(`/moist-air/reviews?reviewID=${id}&key=${key}&value=${value}`)
      .then(function (response) {
        const stringifiedData = JSON.stringify(data);
        const dataCopy = JSON.parse(stringifiedData);
        var index = 0;
        while (index < dataCopy.length) {
          var review = dataCopy[index++];
          if (review.id === id) {
            if (key === 'awards') {
              review.awards[value]++;
              break;
            } else if (key === 'helpful') {
              review.helpful_count++;
              break;
            } else if (key === 'unhelpful') {
              review.helpful_count--;
              break;
            } else if (key === 'funny') {
              review.funny_count++;
              break;
            }
          }
        }
        setData(dataCopy);
        return dataCopy[index - 1];
      })
      .then((changedReview) => {
        const stringifiedRecent = JSON.stringify(recent);
        const recentCopy = JSON.parse(stringifiedRecent);
        for (var i = 0; i < recentCopy.length; i++) {
          var review = recentCopy[i];
          if (review.id === changedReview.id) {
            recentCopy[i] = changedReview;
            break;
          }
        }
        setRecent(recentCopy);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  };

  const modalHandler = (id = null, selected = null) => {
    setAward(selected);
    setModal(id);
  };


  return (
    <Wrapper>
      <ReviewSection>
        <Heading>CUSTOMER REVIEWS</Heading>
        <Header score={score} count={count} recentScore={recentScore} recentCount={recentCount}/>
        <ResultsSummary score={score} count={count}/>
        {/* <Wrapper> */}
        <LeftCol>
          <OverallReviews modalToggler={modalHandler} voteHandler={voteHandler} count={count} reviews={data} />
        </LeftCol>
        <RightCol>
          <RecentReviews modalToggler={modalHandler} voteHandler={voteHandler} reviews={recent} />
        </RightCol>
        {/* </Wrapper> */}
      </ReviewSection>
      <Modal modalToggler={modalHandler} voteHandler={voteHandler} id={modal} selected={awardSelected} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.section`
  background: #1B2838;
  color: #acb2b8;
  font-family: Arial;
  font-size: 14px;
  width: 100%;
  // margin: 0 auto;
`;

const ReviewSection = styled.section`
  // padding: 4em;
  background: #1B2838;
  color: #acb2b8;
  font-size: 14px;
  max-width: 940px;
  min-width: 940px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #FFF;
  font-family: Arial;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding:2px 0 4px;
`;

const LeftCol = styled.div`
  background: #1B2838;
  float: left;
  width: 616px;
`;

const RightCol = styled.div`
  background: #1B2838;
  width: 308px;
  margin-left: 14px;
  float: right;
`;