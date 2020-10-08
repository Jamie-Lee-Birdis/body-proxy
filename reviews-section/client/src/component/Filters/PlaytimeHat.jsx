import React from "react";
import styled from 'styled-components';

var PlaytimeHat = (props) => {
  return (
    <React.Fragment>
      <div>
        <Link href='#'>
          <SteamLabsLogo src='https://review-assets.s3.us-east-2.amazonaws.com/steam_labs_logo.svg' />
          <span>Brought to you by Moist Air Labs</span>
        </Link>
      </div>
       <Explanation>Filter reviews by the user's playtime when the review was written:</Explanation>
    </React.Fragment>
    );
  };

export default PlaytimeHat;

const Link = styled.a`
  color: #19c0d0;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const SteamLabsLogo = styled.img`
  height: 32px;
  margin-right: 5px;
`;

const Explanation = styled.div`
  border-bottom: 1px solid #4582a5;
  margin-bottom: 10px;
  min-width: 300px;
  padding-bottom: 10px;
  white-space: normal;
  }
`;

