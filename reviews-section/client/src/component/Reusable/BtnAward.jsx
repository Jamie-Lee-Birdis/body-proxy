import React from "react";
import styled from 'styled-components'

var BtnAward = ({ id, modalToggler }) => {

  var clickHandler = (event) => {
    modalToggler(id, null);
  };

  return (
    <Wrapper onClick={(event) => clickHandler(event)}>
      <Award>
        <Icon src="https://review-assets.s3.us-east-2.amazonaws.com/award_icon.svg" /> Award
      </Award>
    </Wrapper>
  );
}

export default BtnAward;

const Wrapper = styled.span`
  background: #212c3d;
  border-radius: 2px;
  border: none
  color: #66c0f4 !important;
  cursor: pointer;
  font-size: 12px;
  padding: 1px;
  text-decoration: none !important;
`;
Wrapper.displayName = 'Wrapper';

const Award = styled.span`
    background: transparent;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
}
`;
Award.displayName = 'Award';

const Icon = styled.img`
  height: 16px;
  vertical-align: middle;
`;
Icon.displayName = 'Icon';