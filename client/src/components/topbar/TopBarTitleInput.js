import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { setProjectName } from "../../actions/project";
import onEscOrClickOutside from "../../utils/onEscOrClickOutside";

const TopBarTitleInputForm = styled.form`
  margin: 0;
  margin-left: 15px;
  padding: 10px;
  border-radius: 5px;
  width: 450px;
`;

const TopBarTitleInputInput = styled.input`
  padding: 8px;
  margin-left: -8px;
  font-size: 1.4285714285714286em;
  line-height: 1.2;
  color: #172b4d;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  width: 100%;
  background-color: #f6f8f9;
`;

const TopBarTitleInput = ({
  setIsSelected,
  name,
  setProjectName,
  projectId
}) => {
  const [inputValue, setInputValue] = useState(name);

  useEffect(() => {
    const element = document.getElementById("title-input");
    const cleanup = onEscOrClickOutside(setIsSelected, element);

    return () => {
      cleanup();
    };
  }, [setIsSelected]);

  const onFormSubmit = async e => {
    e.preventDefault();
    await setProjectName(projectId, inputValue);
    setIsSelected(false);
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <TopBarTitleInputForm onSubmit={onFormSubmit}>
      <TopBarTitleInputInput
        id="title-input"
        type="text"
        onChange={onInputChange}
        value={inputValue}
        autoFocus
      ></TopBarTitleInputInput>
    </TopBarTitleInputForm>
  );
};

const mapStateToProps = state => ({
  projectId: state.project.id
});

export default connect(
  mapStateToProps,
  { setProjectName }
)(TopBarTitleInput);
