

import React from "react";
import styled from 'styled-components';


var ShowGraph = () => {
  return (
    <Wrapper>
      <ShowGraphs>
        <Label>Show graph</Label>
        <BtnToggle>&nbsp;</BtnToggle>
      </ShowGraphs>
      <HideGraph>
        <Label>Hide graph</Label>
        <BtnToggle>&nbsp;</BtnToggle>
      </HideGraph>
    </Wrapper>
  );
}

export default ShowGraph;

const ShowGraphs = styled.span`
  background: rgba( 103, 193, 245, 0.2 );
  border: none;
  border-radius: 2px;
  color: #67c1f5 !important;
  cursor: pointer;
  display: inherit;
  padding: 1px;
  text-decoration: none !important;
`;

const Label = styled.span`
  background: transparent;
  border-radius: 2px;
  display: inline;
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
`;

const BtnToggle = styled.div`
  background: url(https://review-assets.s3.us-east-2.amazonaws.com/review_graph_expander.png);
  background-position: 0px -12px;
  background-repeat: no-repeat;
  background-size: 14px 26px;
  display: inline-block;
  height: 16px;
  margin-right: 7px;
  margin-top: 4px;
  width: 14px;
`;

const HideGraph = styled.div`
  background: rgba( 103, 193, 245, 0.2 );
  border: none;
  border-radius: 2px;
  color: #67c1f5 !important;
  cursor: pointer;
  display: none;
  padding: 1px;
  text-decoration: none !important;
`;

const Wrapper = styled.div`
  float: right
`;

const Select = styled.select`
  background: #4582a5;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 2px;
  width: 100px;
`;
