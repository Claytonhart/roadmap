import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteColumn } from "../../../actions/board";

import DropdownContainer from "../../dropdownContainer/DropdownContainer";
import ColumnTitleInput from "./ColumnTitleInput";

import {
  Title,
  ColumnTitleContainer,
  ColumnTitleIconContainer,
  ColumnTitleDelete,
  ColumnRight
} from "./styles";

const ColumnTitle = ({ column, provided, deleteColumn }) => {
  let { projectId } = useParams();

  const { title } = column;

  const [isSelected, setIsSelected] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownMenu = e => {
    e.stopPropagation();
    setShowDropdown(true);
    // deleteColumn(projectId, column);
  };

  const titleToRender = !isSelected ? (
    <Title {...provided.dragHandleProps} onClick={() => setIsSelected(true)}>
      {title}
      <ColumnRight>
        <ColumnTitleIconContainer onClick={showDropdownMenu}>
          <i className="fas fa-ellipsis-h"></i>
        </ColumnTitleIconContainer>
        {showDropdown && (
          <DropdownContainer
            callback={setShowDropdown}
            show={showDropdown}
            left={"20px"}
            top={"0px"}
          >
            <ColumnTitleDelete onClick={() => deleteColumn(projectId, column)}>
              Delete Column
            </ColumnTitleDelete>
          </DropdownContainer>
        )}
      </ColumnRight>
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
