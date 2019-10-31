import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createNewProject } from "../../../actions/project";
import ProjectItem from "./projectItem/ProjectItem";

import DropdownContainer from "../../dropdownContainer/DropdownContainer";

import {
  Container,
  WorkspaceItemTitleContainer,
  WorkspaceItemTitle,
  WorkspaceItemPeople,
  WorkspaceItemProjects,
  WorkspaceItemIconContainer,
  WorkspaceItemIcon,
  WorkspaceItemPerson,
  DropDownContainerButton
} from "./styles";
import CreateProjectModal from "./createProject/CreateProjectModal";

const WorkspaceItem = ({ title, people, projects }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  const createProject = async () => {
    setShowDropdown(false);
    setShowCreateProjectModal(true);
  };

  return (
    <>
      <Container>
        <WorkspaceItemTitleContainer>
          <WorkspaceItemTitle>{title}</WorkspaceItemTitle>
          <WorkspaceItemIconContainer>
            <WorkspaceItemIcon
              id="item-icon"
              onClick={() => setShowDropdown(true)}
            >
              <i className="fas fa-ellipsis-h"></i>
            </WorkspaceItemIcon>
            {showDropdown && (
              <DropdownContainer callback={setShowDropdown} show={showDropdown}>
                <DropDownContainerButton onClick={createProject}>
                  Create new project
                </DropDownContainerButton>
              </DropdownContainer>
            )}
          </WorkspaceItemIconContainer>
        </WorkspaceItemTitleContainer>
        <WorkspaceItemPeople>
          {people.map((person, i) => (
            <WorkspaceItemPerson
              style={{ backgroundColor: person.color }}
              key={i}
            >
              {person.initials}
            </WorkspaceItemPerson>
          ))}
        </WorkspaceItemPeople>
        <WorkspaceItemProjects>
          {projects.map((project, i) => (
            // project.name, .link, .color, .abilitytodelete
            <ProjectItem key={i} project={project} />
          ))}
        </WorkspaceItemProjects>
      </Container>
      {showCreateProjectModal && (
        <CreateProjectModal
          isVisible={showCreateProjectModal}
          title={"Create a new project"}
          onClose={() => setShowCreateProjectModal(false)}
        />
      )}
    </>
  );
};

export default withRouter(
  connect(
    null,
    { createNewProject }
  )(WorkspaceItem)
);
