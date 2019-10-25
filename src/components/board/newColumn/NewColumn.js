import React from "react";
import { connect } from "react-redux";
import { createNewColumn } from "../../../actions/board";

import { Container, NewColumnTitle, NewColumnTitleContainer } from "./styles";

const NewColumn = ({ createNewColumn }) => {
  const createColumn = () => {
    createNewColumn("New Column!");
  };

  return (
    <Container onClick={createColumn}>
      <NewColumnTitleContainer>
        <NewColumnTitle>+ Add new column</NewColumnTitle>
      </NewColumnTitleContainer>
    </Container>
  );
};

export default connect(
  null,
  { createNewColumn }
)(NewColumn);
