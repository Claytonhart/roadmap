import React, { useState } from "react";

import ColumnTitleInput from "./ColumnTitleInput";

import { Title, ColumnTitleContainer } from "./styles";

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
