import React, { useState } from "react";
import styled from "styled-components/macro";

import ColumnTitleInput from "./ColumTitleInput";

const ColumnTitleContainer = styled.div`
  min-height: 61px;
  border-bottom: 2px solid #151b26;
  z-index: 2;
`;

const Title = styled.h3`
  padding: 16px;
`;

const ColumnTitle = ({ column, provided }) => {
  const { title } = column;

  const [isSelected, setIsSelected] = useState(false);

  const titleToRender = !isSelected ? (
    <Title {...provided.dragHandleProps} onClick={() => setIsSelected(true)}>
      {title}
    </Title>
  ) : (
    <ColumnTitleInput column={column} setIsSelected={setIsSelected} />
  );

  return <ColumnTitleContainer>{titleToRender}</ColumnTitleContainer>;
};

export default ColumnTitle;
