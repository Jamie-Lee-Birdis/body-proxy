import React from 'react';
import styled from 'styled-components';
import MenuFlyout from './MenuFlyout.jsx';

const ReviewsFilterTitle = styled.div`
  background-image: url(https://review-assets.s3.us-east-2.amazonaws.com/btn_arrow_down_padded.png);
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: right;
  color: #4582a5;
  cursor: pointer;
  font-size: 10px;
  padding: 10px 20px;
  text-transform: uppercase;
`;

const ReviewsFilterMenu = styled.div`
  border-left: 1px solid #2a475e;
  float: left;
  padding: 0 10px 0 0;
  position: relative;
  &:hover{
    background-color: #c6d4df;
  }
`;

var FilterType = ({ filterTitle, inputs }) => {
  return (
    <ReviewsFilterMenu>
      <ReviewsFilterTitle>
        { filterTitle }
      </ReviewsFilterTitle>
      <MenuFlyout parent={ReviewsFilterMenu} inputs={inputs} />
    </ReviewsFilterMenu>
  );
};

export default FilterType;