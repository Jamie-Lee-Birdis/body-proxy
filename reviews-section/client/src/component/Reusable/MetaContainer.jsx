import React from "react";
import styled from 'styled-components';

import Awards from './Awards.jsx'

var MetaContainer = ({ id, funny, helpful, awards, modalToggler }) => {
  return (
    <div>
      {(helpful > 0) ? `${helpful} people found this review helpful` : ''}
      <br/>
      {(funny > 0) ? `${funny} people found this review funny` : ''}
      <Wrapper>
        <Awards id={id} awards={awards} modalToggler={ modalToggler } />
      </Wrapper>
    </div>
);

}

export default MetaContainer;


const Wrapper = styled.div`
  padding: 5px 0 0;

`;
