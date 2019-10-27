import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setColumnTitle } from "../../../actions/board";

import onEscOrClickOutside from "../../../utils/onEscOrClickOutside";

import { TitleForm, TitleInput } from "./styles";

const ColumnTitleInput = ({ column, setIsSelected, setColumnTitle }) => {
  const { title } = column;
  const [inputValue, setInputValue] = useState(title);

  useEffect(() => {
    const element = document.getElementById("title-input");
    const cleanup = onEscOrClickOutside(setIsSelected, element);

    return () => {
      cleanup();
    };
  }, [setIsSelected]);

  const onFormSubmit = e => {
    e.preventDefault();
    setColumnTitle(inputValue, column);
    setIsSelected(false);
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <TitleForm onSubmit={onFormSubmit}>
      <TitleInput
        id="title-input"
        type="text"
        onChange={onInputChange}
        value={inputValue}
        autoFocus
      ></TitleInput>
    </TitleForm>
  );
};

export default connect(
  null,
  { setColumnTitle }
)(ColumnTitleInput);
