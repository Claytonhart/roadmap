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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColumnTitleIconContainer = styled.span`
  cursor: pointer;
  opacity: 0;
  color: grey;
  transition: opacity 0.2s;
`;

export const Title = styled.h3`
  padding: 16px;
  flex: 1;

  display: flex;
  justify-content: space-between;

  &:hover > span {
    opacity: 1;
  }
`;

// ColumnTitleInput
export const TitleForm = styled.form``;

export const TitleInput = styled.input`
  padding: 16px;
  font-size: 1.4285714285714286em;
  font-family: inherit;
  font-style: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  width: 100%;
  border: none;
  outline: none;
  /* border-bottom: 2px solid #151b26; */
  background-color: ${props => props.theme.primary.grey};
  color: #fff;
  border-radius: 5px 5px 0 0;
`;
