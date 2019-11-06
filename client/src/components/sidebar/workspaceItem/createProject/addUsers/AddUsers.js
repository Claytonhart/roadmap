import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import styled from 'styled-components/macro';
import UsersSearch from './UsersSearch';

const AddUsersContainer = styled.div`
  /*  */
`;

const AddUsersList = styled.ul`
  padding: 10px 0;
  display: flex;
`;

const AddUsersListName = styled.li`
  margin: 0;
`;

const UserInitials = styled.div`
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
  background-color: ${props => (props.color ? props.color : 'gainsboro')};
  color: #fff;
  cursor: pointer;
`;

const AddUsersTooltip = styled.span`
  text-transform: capitalize;
`;

const AddUsers = ({ project, users, index }) => {
  const { _id: id } = project;
  // ["users"], _id, name, date, __v = project

  const [userNames, setUserNames] = useState(null);
  const [usersSearch, setUsersSearch] = useState(false);

  useEffect(() => {
    // debugger;
    const getUserNames = async () => {
      const res = await axios.get(`/api/project/${id}/users`);
      const tempUsers = res.data;
      const tenUsers = tempUsers.slice(0, 10);
      setUserNames(tenUsers);
    };
    getUserNames();
  }, [id, users]);

  return (
    <AddUsersContainer>
      <AddUsersList>
        {userNames &&
          userNames.map(user => {
            if (!user) {
              return null;
            }
            // const { color, _id: id, name, email, date, __v: version } = user;
            const { color, _id: id, name } = user;

            return (
              <AddUsersListName key={id}>
                <UserInitials color={color} data-tip data-for={index + name}>
                  {name.substring(0, 2)}
                </UserInitials>
                <ReactTooltip id={index + name}>
                  <AddUsersTooltip>{name}</AddUsersTooltip>
                </ReactTooltip>
              </AddUsersListName>
            );
          })}
        <AddUsersListName onClick={() => setUsersSearch(true)}>
          <UserInitials data-tip data-for='add-people'>
            <i className='fas fa-plus'></i>
          </UserInitials>
          <ReactTooltip id='add-people'>
            <span>Add people</span>
          </ReactTooltip>
        </AddUsersListName>
      </AddUsersList>
      {usersSearch && <UsersSearch index={index} id={id} />}
    </AddUsersContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: state.projects[ownProps.index],
  users: state.projects[ownProps.index].users
});

export default connect(mapStateToProps)(AddUsers);
