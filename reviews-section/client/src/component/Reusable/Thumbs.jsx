import React from "react";
import styled from 'styled-components';

const ImageStyle = styled.div`
  display: inline-block;
  border: none;
  border-radius: 0;
  margin-right: 10px;
  padding: 1px 5px 1px 0;
`;

const Thumb = styled.img`
  float: left;
`;

var Thumbs = (props) => {
  var thumb = '';
  if (props.thumb) {
    thumb = 'https://review-assets.s3.us-east-2.amazonaws.com/icon_thumbsUp_v6.png';
  } else if (props.thumb === false) {
    thumb = 'https://review-assets.s3.us-east-2.amazonaws.com/icon_thumbsDown_v6.png';
  }
  return (
        <ImageStyle>
          <Thumb src={thumb} width={props.dim} height={props.dim} />
        </ImageStyle>
  );

}

export default Thumbs;