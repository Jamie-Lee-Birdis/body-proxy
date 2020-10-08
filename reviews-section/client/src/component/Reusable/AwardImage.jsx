import React from 'react';
import styled from 'styled-components';

var awardPicker = (awardName) => {
  if (awardName === 'Deep Thoughts') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/deep_thoughts_still.png';
  } else if (awardName === 'Extra Helpful') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/extra_helpful_still.png';
  } else if (awardName === 'Golden Unicorn') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/golden_unicorn_still.png';
  } else if (awardName === 'Heartwarming') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/heartwarming_still.png';
  } else if (awardName === 'Hilarious') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/hilarious_still.png';
  } else if (awardName === 'Hot Take') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/hot_take_still.png';
  } else if (awardName === 'Mind Blown') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/mind_blown_still.png';
  } else if (awardName === 'Poetry') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/poetry_still.png';
  } else if (awardName === 'Treasure') {
    return 'https://review-assets.s3.us-east-2.amazonaws.com/treasure_still.png';
  }
};

let src = awardPicker;

var AwardImage = ({ award, size }) => {
  var src = awardPicker(award);
  return (
    <ImageStyle src={src} size={size} />
  );
};

export default AwardImage;

const ImageStyle = styled.img`
  border-radius: 0;
  border: none;
  display: inline-block;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
`;
ImageStyle.displayName = 'ImageStyle ';