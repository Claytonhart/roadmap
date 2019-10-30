import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 8px;
  &:not(:first-of-type) {
    border-top: 1px solid ${props => props.theme.primary.lightgrey};
  }
`;

export const WorkspaceItemTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const WorkspaceItemTitle = styled.h6`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`;

export const WorkspaceItemIconContainer = styled.div`
  &:hover > span {
    opacity: 1;
  }
`;

export const WorkspaceItemIcon = styled.span`
  cursor: pointer;
  opacity: 0;
`;

export const WorkspaceItemPeople = styled.ul`
  display: flex;
  margin: 12px 0;
`;

export const WorkspaceItemPerson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 11px;
  text-transform: uppercase;

  height: 24px;
  width: 24px;
  margin: 0;
  margin-right: 8px;
  padding: 6px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary.lightgrey};
  cursor: pointer;
`;

export const WorkspaceItemProjects = styled.ul`
  margin-bottom: 8px;
  text-align: left;
`;
