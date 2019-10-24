import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { setColumnTitle } from "../../../actions/board";

import onEscOrClickOutside from "../../../utils/onEscOrClickOutside";

const TitleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleInput = styled.input`
  padding: 16px;
  font-size: 1.4285714285714286em;
  font-family: inherit;
  font-style: inherit;
  color: #172b4d;
  font-weight: 500;
  letter-spacing: -0.008em;
  max-width: 100%;
  border: none;
  outline: none;
  /* border-bottom: 2px solid #151b26; */
  background-color: #151b26;
  color: #fff;
  border-radius: 5px 5px 0 0;
`;

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
