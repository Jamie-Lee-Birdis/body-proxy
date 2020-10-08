import React from "react";
import styled from 'styled-components'


var handleColorType = (score) => {
  if (score === 'Overhwelmingly Positive') {
    return '#66C0F4';
  } else if (score === 'Very Positive') {
    return '#66C0F4'
  } else if (score === 'Mostly Positive') {
    return '#66C0F4';
  } else if (score === 'Mixed') {
    return '#a8926a';
  } else {
    return '#c35c2c';
  }
}

var SummaryScore = (props) => {
  return (
    <GameReviewSummary>{props.score}</GameReviewSummary>
    );

  }

  export default SummaryScore;

  const GameReviewSummary = styled.span`
    color: ${props => handleColorType(props.children)};
  cursor: help;
  font-family: Arial;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
    margin: 0;
    padding: 0;
    text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
    vertical-align: middle;
  `;