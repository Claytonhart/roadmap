import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 5px;
  width: 220px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const NewColumnTitleContainer = styled.div`
  min-height: 61px;
  border-bottom: 2px solid #151b26;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewColumnTitle = styled.h3`
  padding: 16px;
  flex: 1;
`;

export const NewColumnForm = styled.form`
  flex: 1;
  background-color: ${props => props.theme.primary.blue};
`;

export const NewColumnFormInput = styled.input`
  padding: 16px;
  font-size: 1.4285714285714286em;
  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  width: 100%;
  border: none;
  outline: none;
  background-color: #272838;
  color: #fff;
  border-radius: 5px 5px 0 0;

  &::placeholder {
    color: #d7d7da;
  }
`;
