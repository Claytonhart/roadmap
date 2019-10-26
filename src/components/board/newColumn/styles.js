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
  display: flex;
  justify-content: center;
  align-items: center;
`;
