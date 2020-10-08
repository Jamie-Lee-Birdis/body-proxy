import React from "react";
import styled from 'styled-components'
import HeaderInfo from '../Reusable/HeaderInfo.jsx'

var RecentHeader = ({ score, count }) => {
  return (
    <Review_histogram_recent_section>
      <div>Recent Reviews:</div>
      <HeaderInfo score={ score } count={ count } />
    </Review_histogram_recent_section>
  );
}


export default RecentHeader;

const Review_histogram_recent_section = styled.div`
  background: #40657e;
  border-bottom: 1px solid #000000;
  box-shadow: 0 0 5px #000;
  color: #e5e5e5;
  display: inline-block;
  font-family: Arial;
  font-size: 15px;
  height: 43px;
  padding: 9px 10px 10px;
  vertical-align: bottom;
  width: 315px;
`;

const Title = styled.div`
  font-family: Arial;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 5px;
  color: #e5e5e5;
`;
