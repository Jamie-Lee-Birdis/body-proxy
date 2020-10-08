import React, { useEffect } from 'react';
import styled from 'styled-components';

import ModalBtn from './ModalBtn.jsx';

const Modal = function ({ id = null, modalToggler, voteHandler, selected }) {
  var body = document.getElementsByTagName('html')[0];
  if (id === null) {
    body.setAttribute("style", "overflow: auto;")
    return null;
  }
  body.setAttribute("style", "overflow: hidden;"),

  useEffect(() => {
    if (selected) {
      let selectedAward = document.getElementById(selected);
      selectedAward.focus();
    }
  })

  const giveFocus = (event, awardName) => {
    try {
      event.target.focus();
      modalToggler(id, awardName)
    } catch (err) {
      console.log(err);
    }
  };

  var clickHandler = () => {
    if (selected) {
      voteHandler(id, 'awards', selected)
      modalToggler(null, selected);
    }
  }

  const modalBtnGenerator = (selected) => {
    var awards =  [
      { name: 'Treasure', cost: 600 },
      { name: 'Mind Blown', cost: 1200 },
      { name: 'Golden Unicorn', cost: 2400 },
      { name: 'Deep Thoughts', cost: 300 },
      { name: 'Heartwarming', cost: 300 },
      { name: 'Hilarious', cost: 300 },
      { name: 'Hot Take', cost: 300 },
      { name: 'Poetry', cost: 300 },
      { name: 'Extra Helpful', cost: 300 }
    ];
    const buttons = [];
    for (var i = 0; i < awards.length; i++) {
      buttons.push(<ModalBtn award={awards[i]} key={i} id={id} giveFocus={giveFocus} />)
    }
    return buttons;
  };

  const buttons = modalBtnGenerator(selected)
  return (
  <div>
    <Modal_Wrapper onClick={ () => modalToggler() }>
      <Modal_Position >
        <Modal_Content onClick={(event) => event.stopPropagation()}>
          <Modal_TopBar ></Modal_TopBar>
          <Modal_Content_Container>
            <Modal_Close onClick={ () => modalToggler() } >&times;</Modal_Close>
            <Award_Header>
              <Award_Title>Give an Award</Award_Title>
              <Award_Description>Use your Steam Points to emphasize this review and grant the reviewer bonus points!</Award_Description>
              <HR />
            </Award_Header>
            <Award_Button_Container>
              {buttons}
            </Award_Button_Container>
            <HR />
            <Modal_Footer >
              <Modal_Footer_Left >
                <Award_Button_Points_Icon height='32' width='32' src='https://review-assets.s3.us-east-2.amazonaws.com/steam_points_icon.png' />
                <Award_Balance>
                  <Award_Balance_Label>
                    Your Balance
                  </Award_Balance_Label>
                  <Award_Balance_Amount>
                    4,375
                  </Award_Balance_Amount>
                </Award_Balance>
              </Modal_Footer_Left>
              <Modal_Footer_RIght>
                <Award_Buy>
                    <Award_Purchase onClick={() => clickHandler()}>Next</Award_Purchase>
                </Award_Buy>
                <Modal_Footer_Link href="#">What are Steam Points?</Modal_Footer_Link>
              </Modal_Footer_RIght>
            </Modal_Footer>
          </Modal_Content_Container>
        </Modal_Content>
      </Modal_Position>
    </Modal_Wrapper>
  </div>
  );
}

export default Modal;

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
`;

const Award_Button_Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Award_Button_Points_Icon = styled.img`
  vertical-align: bottom;
`;

const Award_Buy = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Award_Description = styled.div`
  color: #66C0F4;
  font-size: 14px;
`;

const Award_Balance = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.2em;
`;

const Award_Balance_Amount = styled.div`
  font-size: 16px;
  letter-spacing: 0.05em;
`;

const Award_Balance_Label = styled.div`
  color: #66C0F4;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Award_Header = styled.div`
  color: #E4E4E4;
  font-family: Arial;
`;

const Award_Purchase = styled.div`
  background: linear-gradient(180deg, #767F87 0%, #49525A 100%), #C4C4C4;
  border-radius: 3px;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.25);
  color: #E4E4E4;
  cursor: pointer;
  font: inherit;
  letter-spacing: 0.025em;
  outline: inherit;
  padding: 4px 20px;
`;

const Award_Title = styled.div`
  font-size: 30px;
  letter-spacing: 0.05em;
  line-height: 3.5rem;
  text-transform: uppercase;
`;

const HR = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: 2px;
  margin: 20px 0;
  width: 100%;
`;

const Modal_Content = styled.div`
  background: radial-gradient(circle at top left, rgba(74, 81, 92, 0.4) 0%, rgba(75, 81, 92, 0) 60%), #25282e;
  box-shadow: 0px 8px 38px 5px rgba(0, 0, 0, 0.75);
  color: #969696;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  height: initial
  max-height: 95vh;
  margin: auto;
  width: initial;
  max-width: 88vw;
  user-select: none;
`;

const Modal_Content_Container = styled.div`
  margin: 24px;
`;

const Modal_Close = styled.span`
  float: right;
  font-size: 25px;
  margin-right: 6px;
  text-align: right;
  `;

const Modal_Dialog = styled.span`
  background: radial-gradient(circle at top left, rgba(74, 81, 92, 0.4) 0%, rgba(75, 81, 92, 0) 60%), #25282e;
  color: #E4E4E4;
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  font-size: 14px;
  font-family: Arial;
  min-height: 0;
  min-width: 0;
  overflow: visible;
  padding: 24px;
  user-select: none;
`;

const Modal_Footer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Modal_Footer_RIght = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const Modal_Footer_Left = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left 5px;
`;

const Modal_Footer_Link = styled.a`
  color: #189AD3;
  font-size: 12px;
  padding-top: 8px;
  text-decoration: none;
`;

const Modal_Position = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Modal_TopBar = styled.div`
  background: linear-gradient(to right, #00ccff, #3366ff);
  height: 1px;
`;

const Modal_Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: block;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;