import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styled from "styled-components/macro";
import axios from "axios";
import DropdownContainer from "../../dropdownContainer/DropdownContainer";
import EditProjectModal from "../../sidebar/workspaceItem/createProject/EditProjectModal";

const UserInitials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 11px;
  text-transform: uppercase;

  height: 24px;
  width: 24px;
  margin: 0;
  margin-left: 8px;
  padding: 6px;
  border-radius: 50%;
  background-color: ${props => (props.color ? props.color : "gainsboro")};
  color: #fff;
  cursor: pointer;
`;

const ProjectListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 2px solid #dfe1e6;
  /* position: relative; */

  &:last-of-type {
    border-bottom: 2px solid #dfe1e6;
  }

  &:hover {
    background-color: rgb(250, 251, 252);
  }
`;

const ProjectListTitle = styled.h3`
  margin: 0;
  color: inherit;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const ProjectListNames = styled.ul`
  display: flex;
  margin: 0;
  margin-right: 20px;
`;

const ProjectListName = styled.li`
  margin: 0;
`;

const ProjectListUsersAndSettings = styled.div`
  display: flex;
  position: relative;
`;

const ProjectListItemIcon = styled.span`
  cursor: pointer;
  margin-left: 35px;

  /* opacity: 0; */
`;

const DropDownContainerButton = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  background-color: #fff;
  text-align: right;
  display: block;
  border: none;
  background-color: transparent;
  width: 100%;
  color: #272838;

  &:hover {
    background-color: #f6f8f9;
    text-decoration: none;
    color: #272838;
  }
`;

const ProjectListItem = ({ index, project }) => {
  const { name, _id: id } = project;

  // color, _id, name, email, date, __v
  const [userNames, setUserNames] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`/api/project/${id}/users`);
      const tempUsers = res.data;
      const threeUsers = tempUsers.slice(0, 2);
      setUserNames(threeUsers);
    };
    getUsers();
  }, [id]);

  const editProject = () => {
    setShowModal(true);
    setShowDropdown(false);
  };

  return (
    <ProjectListContainer>
      <ProjectListTitle as={Link} to={`/project/${id}`}>
        {name}
      </ProjectListTitle>
      {userNames && (
        <ProjectListUsersAndSettings>
          <ProjectListNames>
            {userNames.map((user, i) => {
              // const { color, _id: id, name, email, date, __v: version } = user;
              const { color, _id: id, name } = user;

              return (
                <ProjectListName key={id}>
                  <UserInitials color={color} data-tip data-for={i + name}>
                    {name.substring(0, 2)}
                  </UserInitials>
                  <ReactTooltip id={i + name}>
                    <span>{name}</span>
                  </ReactTooltip>
                </ProjectListName>
              );
            })}
          </ProjectListNames>

          <ProjectListItemIcon onClick={() => setShowDropdown(true)}>
            <i className="fas fa-ellipsis-h"></i>
          </ProjectListItemIcon>
          {showDropdown && (
            <DropdownContainer
              callback={setShowDropdown}
              show={showDropdown}
              right="-150px"
            >
              <DropDownContainerButton onClick={editProject}>
                Project Settings
              </DropDownContainerButton>
            </DropdownContainer>
          )}
        </ProjectListUsersAndSettings>
      )}
      {showModal && (
        <EditProjectModal
          index={index}
          projectId={id}
          projectName={name}
          isVisible={showModal}
          title={"Project details"}
          onClose={() => setShowModal(false)}
        />
      )}
    </ProjectListContainer>
  );
};

export default ProjectListItem;
