import React from "react";
import styled from 'styled-components'
import AwardImage from './AwardImage.jsx'

var Awards = ({ id, awards, modalToggler }) => {

  var clickHandler = (id, award, event) => {
    modalToggler(id, award);
  };

  if (awards) {
    var awardsTemplates = [];
    let i = 0;
    for (let award in awards) {
      if (awards[award]) {
        var btn = (
          <Button key={i++} onClick={(event) => clickHandler(id, award, event)} >
            <AwardImage award={award} size='20'/> {(awards[award] > 1) ? <ButtonText> { awards[award] } </ButtonText> : ''}
          </Button>
        )
        awardsTemplates.push(btn)
      }
    };
    return (
      <div>
        {awardsTemplates}
      </div>
    );
  } else {
    return null
  }
}

export default Awards;

const Button = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #647580;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin: 0 4px;
  // min-height:
  padding: 5px;
  `;
  Button.displayName = 'Button';

  const ButtonText = styled.span`
  color: #66c0f4;
  font-size: 13px;
  font-weight: bold;
  padding: 3px;
  vertical-align: super;
`;
ButtonText.displayName = 'ButtonText';
