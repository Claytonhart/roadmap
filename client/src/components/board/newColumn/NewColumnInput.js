import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { createNewColumn } from "../../../actions/board";
import { NewColumnForm, NewColumnFormInput } from "./styles";

import onEscOrClickOutside from "../../../utils/onEscOrClickOutside";

const NewColumnInput = ({ setIsSelected, createNewColumn }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const element = document.getElementById("new-column-input");
    const cleanup = onEscOrClickOutside(setIsSelected, element);

    return () => {
      cleanup();
    };
  }, [setIsSelected]);

  const onNewColumnSubmit = e => {
    e.preventDefault();
    createNewColumn(inputValue);
    setIsSelected(false);
  };

  return (
    <NewColumnForm onSubmit={onNewColumnSubmit}>
      <NewColumnFormInput
        id="new-column-input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="New Column"
        autoFocus
      ></NewColumnFormInput>
    </NewColumnForm>
  );
};

export default connect(
  null,
  { createNewColumn }
)(NewColumnInput);
