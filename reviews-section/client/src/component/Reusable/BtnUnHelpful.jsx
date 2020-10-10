import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.span`
  background: #212c3d;
  border-radius: 2px;
  color: #66c0f4 !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  padding: 1px 5px;
  text-decoration: none !important;
`;

const UnHelpful = styled.i`
  background: url(https://review-assets.s3.us-east-2.amazonaws.com/icons_16.png);
  background-position: -64px -16px;
  display: inline-block;
  height: 16px;
  vertical-align: text-top;
  width: 16px;
`;

var BtnUnHelpful = ({id, voteHandler}) => {
  const handleClick = (event, cb) => {
    cb(id, 'unhelpful');
  };
  return (
    <Wrapper onClick={(event) => handleClick(event, voteHandler)}>
      <UnHelpful /> No
    </Wrapper>
  );

};

export default BtnUnHelpful;