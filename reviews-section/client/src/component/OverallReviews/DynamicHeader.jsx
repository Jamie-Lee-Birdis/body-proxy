import React from "react";
import styled from 'styled-components'

const Frame = styled.span`
  color: #56707f;
  font-size: 14px;
  padding-left:1em;
  text-transform: uppercase;
`;

const Leader = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: #FFF;
`;

var SummaryScore = (props) => {
  return (
    <div>
      <Leader>Most Helpful Reviews</Leader>
      <Frame>{props.timeFrame}</Frame>
    </div>
  );

}

export default SummaryScore;