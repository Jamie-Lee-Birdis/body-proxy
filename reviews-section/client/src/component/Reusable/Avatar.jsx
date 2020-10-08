import React from "react";
import styled from 'styled-components'

const ImageStyle = styled.img`
  max-width: 32px;
  max-height: 32px;
  padding: 1px 5px 1px 0;
  border-radius: 0;
  border: none;
  display: inline-block;
`;

var Avatar = (props) => {
  return (
        <ImageStyle src={props.avatar} />
  );

}

export default Avatar;