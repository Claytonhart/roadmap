import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteColumn } from "../../../actions/board";

import ColumnTitleInput from "./ColumnTitleInput";

import {
  Title,
  ColumnTitleContainer,
  ColumnTitleIconContainer
} from "./styles";

const ColumnTitle = ({ column, provided, deleteColumn }) => {
  let { projectId } = useParams();

  const { title } = column;

  const [isSelected, setIsSelected] = useState(false);

  const showDropdown = e => {
    e.stopPropagation();
    console.log("clicked delete column");
    deleteColumn(projectId, column);
  };

  const titleToRender = !isSelected ? (
    <Title {...provided.dragHandleProps} onClick={() => setIsSelected(true)}>
      {title}
      <ColumnTitleIconContainer onClick={showDropdown}>
        <i className="fas fa-ellipsis-h"></i>
      </ColumnTitleIconContainer>
    </Title>
  ) : (
    <ColumnTitleInput column={column} setIsSelected={setIsSelected} />
  );

  return <ColumnTitleContainer>{titleToRender}</ColumnTitleContainer>;
};

export default connect(
  null,
  { deleteColumn }
)(ColumnTitle);
