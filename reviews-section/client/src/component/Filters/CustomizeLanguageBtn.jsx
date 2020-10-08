import React from "react";
import styled from 'styled-components';

var CustomizeLanguageBtn = () => {
  return (
    <CustomizeLanguage>
      Customize
    </CustomizeLanguage>
    );
  }

export default CustomizeLanguageBtn;

const CustomizeLanguage = styled.a`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  color: #67c1f5;
  font-size: 10px;
  padding: 3px 5px;
  text-decoration: none;
  text-transform: uppercase;
`;