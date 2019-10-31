import React, { useState } from "react";
import styled from "styled-components/macro";

import TopBarTitleInput from "./TopBarTitleInput";

const TopBarTitleContainer = styled.div``;

const Title = styled.h3`
  margin-left: 15px;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f6f8f9;
    cursor: pointer;
  }
`;

const TopBarName = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const titleToRender = !isSelected ? (
    <Title onClick={() => setIsSelected(true)}>{name}</Title>
  ) : (
    <TopBarTitleInput setIsSelected={setIsSelected} name={name} />
  );

  return <TopBarTitleContainer>{titleToRender}</TopBarTitleContainer>;
};

export default TopBarName;
