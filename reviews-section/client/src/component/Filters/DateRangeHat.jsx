import React from "react";
import styled from 'styled-components';

var DateRangeHat = () => {
  return (
    <Explanation>
      To view reviews within a date range, please click and drag a selection on a graph above or click on a specific bar.
      <br /><br />
			<InnerFade>
        <ShowGraph>Show graph</ShowGraph>
      </InnerFade>
    </Explanation>
  );
};

export default DateRangeHat;

const Explanation = styled.div`
  border-bottom: 1px solid #4582a5;
  margin-bottom: 10px;
  padding-bottom: 10px;
  white-space: normal;
`;

const InnerFade = styled.div`
  background: linear-gradient( to bottom, rgba(47,137,188,1) 5%, rgba(23,67,92,1) 95%);
  border: none;
  border-radius: 2px;
  color: #A4D7F5 !important;
  cursor: pointer;
  display: inline-block;
  padding: 1px;
  text-decoration: none !important;
`;

const ShowGraph = styled.span`
  background: linear-gradient( to bottom, rgba(33,101,138,1) 5%, rgba(23,67,92,1) 95%);
  border-radius: 2px;
  display: block;
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
`;