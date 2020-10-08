import React from "react";
import styled from 'styled-components';

import AwardImage from '../AwardImage.jsx'

const ModalBtn = function ({ award, giveFocus }) {

  const imageAnimate = (event) => {
    try {
      event.target.children[0].src = event.target.children[0].src.replace('_still', '_animated');
    } catch {
      try {
        event.target.src = event.target.src.replace('_still', '_animated');
      } catch {
        // an element without a src or a child with a src was moused over, ignore this event.
      }
    }
  };

  const imageStill = (event) => {
    try {
      event.target.children[0].src = event.target.children[0].src.replace('_animated', '_still');
    } catch {
      try {
        event.target.src = event.target.src.replace('_animated', '_still');
      } catch {
        // an element without a src or a child with a src was moused over, ignore this event.
      }
    }
  };

  return (
    <Award_Button id={award.name} onMouseEnter={ (event) => imageAnimate(event) } onMouseLeave={() => imageStill(event)} onClick={(event) => giveFocus(event, award.name)}>
      <AwardImage award={award.name} size='80' />
      <Award_Button_Label>{award.name}</Award_Button_Label>
      <Award_Button_Points><Award_Button_Points_Icon height='16' width='16' src='https://review-assets.s3.us-east-2.amazonaws.com/steam_points_icon.png' /> {award.cost}</Award_Button_Points>
    </Award_Button>
  );
}

export default ModalBtn;

const Award_Button = styled.button`
  align-items: center;
  background: none;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  color: inherit;
  display: flex;
  flex-direction: column;
  font: inherit;
  outline: inherit;
  padding: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  &:focus {
    background-color: rgba(0, 0, 0, 0.25);
    border-color: #66C0F4;
  }
`;

const Award_Button_Label = styled.div`
  color: #66C0F4;
  letter-spacing: 0.05em;
`;

const Award_Button_Points_Icon = styled.img`
  vertical-align: bottom;
`;

const Award_Button_Points = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
`;
