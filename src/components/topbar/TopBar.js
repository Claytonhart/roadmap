import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  height: 100px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 3px 0px rgba(21, 27, 38, 0.15);
  z-index: 10;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <div>Title!</div>
      <div>Content</div>
      <div>Profile</div>
    </TopBarContainer>
  );
};

export default TopBar;
