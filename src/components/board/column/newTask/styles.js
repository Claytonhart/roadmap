import styled from "styled-components/macro";

// AddNewTaskButton
export const NewTaskButtonContainer = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: lightgrey;
  }
`;

// NewTaskContainer
export const NewTask = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export const NewTaskForm = styled.form``;
