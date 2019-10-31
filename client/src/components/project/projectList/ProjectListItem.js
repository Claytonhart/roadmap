import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import axios from "axios";

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
  margin-right: 10px;
`;

const ProjectListName = styled.li`
  margin: 0;
`;

const ProjectListUsersAndSettings = styled.div`
  display: flex;
`;

const ProjectListItemIcon = styled.span`
  cursor: pointer;
  margin-left: 35px;

  /* opacity: 0; */
`;

const ProjectListItem = ({ project }) => {
  const { name, _id: id } = project;

  // color, _id, name, email, date, __v
  const [userNames, setUserNames] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`/api/project/${id}/users`);
      const tempUsers = res.data;
      const threeUsers = tempUsers.slice(0, 2);
      setUserNames(threeUsers);
    };
    getUsers();
  }, [id]);

  return (
    <ProjectListContainer>
      <ProjectListTitle as={Link} to={`/project/${id}`}>
        {name}
      </ProjectListTitle>
      {userNames && (
        <ProjectListUsersAndSettings>
          <ProjectListNames>
            {userNames.map(user => {
              // const { color, _id: id, name, email, date, __v: version } = user;
              const { color, _id: id, name } = user;

              return (
                <ProjectListName key={id}>
                  <UserInitials color={color}>
                    {name.substring(0, 2)}
                  </UserInitials>
                </ProjectListName>
              );
            })}
          </ProjectListNames>

          <ProjectListItemIcon
            onClick={() => console.log("edit project details")}
          >
            <i className="fas fa-ellipsis-h"></i>
          </ProjectListItemIcon>
        </ProjectListUsersAndSettings>
      )}
    </ProjectListContainer>
  );
};

export default ProjectListItem;
