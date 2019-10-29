import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: ${props => (props.display ? "block" : "none")};
  top: ${props => (props.top ? props.top : null)};
  bottom: ${props => (props.bottom ? props.bottom : null)};
  left: ${props => (props.left ? props.left : null)};
  right: ${props => (props.right ? props.right : null)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#fff"};

  position: absolute;
  z-index: 99999;
  border: 1px solid gainsboro;
  box-shadow: 0 2px 4px 0 gainsboro;
  padding: 5px 0;
  border-radius: 5px;

  max-height: 300px;
  max-width: 300px;
  overflow: auto;
`;

const DropdownContainer = props => {
  const { children, ...position } = props;
  return <Container {...position}>{children}</Container>;
};

export default DropdownContainer;
