import React from "react";
import styled from 'styled-components';
import CustomizeLanguageBtn from './CustomizeLanguageBtn.jsx';
import PlaytimeHat from './PlaytimeHat.jsx';
import DateRangeHat from './DateRangeHat.jsx';

var MenuFlyout = ({ inputs, parent }) => {
  const FlyoutInputs = [];
  let input;
  for (let key in inputs) {
    let id = inputs[key].id;
    if (id === 'hat') {
      input = inputs[key].component;
      if (input === 'PlaytimeHat') {
        input = <PlaytimeHat key={key} />;
      } else if (input === 'DateRangeHat') {
        input = <DateRangeHat key={key} />;
      }
    } else if (id === 'shoes') {
      input = inputs[key].component;
      if (input === 'CustomizeLanguageBtn') {
        input = <CustomizeLanguageBtn key={key} />;
      }
    } else {
      let label = inputs[key].label;
      let name = inputs[key].name;
      let type = inputs[key].type;
      let value = inputs[key].value;
      let onChange = inputs[key].onChange;
      let checked = inputs[key].checked;
      input = (
        <React.Fragment key={key} >
          <FlyoutInput type={type} name={name} value={value} id={id} onChange={onChange} checked={checked}/>
          <label htmlFor={id} >{ label }</label><br />
        </React.Fragment>
      );
    }
    FlyoutInputs.push(input);
  }


  return (
    <ReviewsFilterFlyout ReviewsFilterMenu={ parent }>
      <FlyoutContent>
        {FlyoutInputs}
      </FlyoutContent>
    </ReviewsFilterFlyout>
    );
  }

export default MenuFlyout;

const FlyoutInput = styled.input`
  vertical-align: text-top;
`;

const ReviewsFilterFlyout = styled.div`
  color: #556772;
  display: none;
  line-height: 20px;
  min-width: 100%;
  padding 10px;
  position: absolute;
  z-index: 10;

  ${props => props.ReviewsFilterMenu}:hover & {
    display: block;
    background-color: #c6d4df;
  }
`;

const FlyoutContent = styled.div`
  position: relative;
  white-space: nowrap;
`;