import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

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

import EditProjectModal from "./createProject/EditProjectModal";

const WorkspaceItem = ({ index, title, id }) => {
  const [people, setPeople] = useState(null);

  const [showDropdown, setShowDropdown] = useState(false);

  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  // const [shouldUpdate, setShouldUpdate] = useState(true);

  useEffect(() => {
    // debugger;
    const getUsers = async () => {
      const res = await axios.get(`/api/project/${id}/users`);
      const tempUsers = res.data;
      const threeUsers = tempUsers.slice(0, 3);
      // debugger;
      setPeople(threeUsers);
    };
    getUsers();
  }, [id]);

  const editProject = () => {
    setShowEditProjectModal(true);
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
                <DropDownContainerButton onClick={editProject}>
                  Project settings
                </DropDownContainerButton>
                {/* <DropDownContainerButton onClick={createProject}>
                  Create new project
                </DropDownContainerButton> */}
              </DropdownContainer>
            )}
          </WorkspaceItemIconContainer>
        </WorkspaceItemTitleContainer>
        <WorkspaceItemPeople>
          {people &&
            people.map((person, i) => {
              if (!person) {
                return null;
              }

              return (
                <WorkspaceItemPerson
                  style={{ backgroundColor: person.color }}
                  key={i}
                >
                  {/* {person.name} */}
                  {person.name.substring(0, 2)}
                </WorkspaceItemPerson>
              );
            })}
        </WorkspaceItemPeople>
        <WorkspaceItemProjects>
          {/* object with .color and .name */}
          <ProjectItem
            projectId={id}
            project={{ color: "blue", name: "Board" }}
          />
          <ProjectItem
            onClick={editProject}
            project={{ color: "red", name: "Project Details" }}
          />
          {/* {projects.map((project, i) => (
            // project.name, .link, .color, .abilitytodelete
            <ProjectItem key={i} project={project} />
          ))} */}
        </WorkspaceItemProjects>
      </Container>
      {showEditProjectModal && (
        <EditProjectModal
          index={index}
          projectId={id}
          projectName={title}
          isVisible={showEditProjectModal}
          title={"Project details"}
          onClose={() => setShowEditProjectModal(false)}
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
