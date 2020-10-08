import React from "react";
import styled from 'styled-components'
import SummaryScore from '../Reusable/SummaryScore.jsx'

var ResultsSummary = ({ count, score }) => {
  return (
    <div>
      <Wrapper>
        Showing {count} reviews that match the filters above ( <SummaryScore score={score}/> )
      </Wrapper>
    </div>
  );
}

export default ResultsSummary;

const Wrapper = styled.div`
  border-bottom: 1px solid #000;
  color: #c6d4df;
  font-size: 15px;
  margin-bottom: 20px;
  min-width: 940px;
  padding-bottom: 20px;
  `;
  Wrapper.displayName = 'Wrapper';