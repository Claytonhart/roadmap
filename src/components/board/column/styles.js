import styled from "styled-components/macro";

// Column
export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 5px;
  width: 220px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;

export const ColumnTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px;
`;

// ColumnTitle
export const ColumnTitleContainer = styled.div`
  min-height: 61px;
  border-bottom: 2px solid #151b26;
  z-index: 2;
`;

export const Title = styled.h3`
  padding: 16px;
`;

// ColumnTitleInput
export const TitleForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleInput = styled.input`
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
