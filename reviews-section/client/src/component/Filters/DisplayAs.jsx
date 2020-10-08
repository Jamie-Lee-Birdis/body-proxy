import React from "react";
import styled from 'styled-components';


var DisplayAs = () => {
  return (
      <Wrapper>
				<span>Display As: </span>
				<Select >
					<option value="summary">Summary</option>
					<option value="all">Most Helpful</option>
					<option value="recent">Recent</option>
					<option value="funny">Funny</option>
				</Select>
			</Wrapper>
    );
  }

  export default DisplayAs;


const Wrapper = styled.div`
  border-left: 1px solid #2a475e;
  color: #4582a5;spanspan
  float: left;
  font-size: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
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
