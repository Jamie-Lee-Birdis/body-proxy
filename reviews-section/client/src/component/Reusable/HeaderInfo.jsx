import React from 'react';
import styled from 'styled-components';
import SummaryScore from './SummaryScore.jsx';

var HeaderInfo = ({ score, count }) => {
  return (
    <div>
      <SummaryScore score={score}></SummaryScore> <ReviewCount>({count} reviews)</ReviewCount>
      <a><img style={{ width: 12, height: 12 }} src="https://review-assets.s3.us-east-2.amazonaws.com/icon_questionmark.png" /></a>
    </div>
  );
};

export default HeaderInfo;

const ReviewCount = styled.span`
  color: #8ba6b6;
  font-size: 12px;
  margin: 0;
  padding: 0 0 5px;
  vertical-align: bottom;
`;