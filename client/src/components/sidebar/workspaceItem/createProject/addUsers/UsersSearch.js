import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUserToProject } from '../../../../../actions/projects';
import { DebounceInput } from 'react-debounce-input';
import styled from 'styled-components';
import axios from 'axios';

const UserInputSearch = styled(DebounceInput)`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
`;

const UsersElement = styled.li`
  padding: 8px 0;
  text-transform: capitalize;
`;

const UsersIcon = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;

const UsersSearch = ({ index, id, addUserToProject }) => {
  // const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   console.log("searching for user");
  // };

  const searchForUsers = async e => {
    // setUser(e.target.value);
    // makeUserRequest(e.target.value);
    if (e.target.value) {
      const res = await axios.get(`/api/users/name/${e.target.value}`);
      setUsers(res.data);
      console.log(res);
    } else {
      setUsers([]);
    }
  };

  const addUser = async i => {
    const userId = users[i]._id;
    // const usersArray = [].push(userId);
    // call action addUser based on id
    await addUserToProject(id, userId, index);
    console.log('adding user: ' + userId);
  };

  return (
    <div>
      {/* <form onSubmit={onFormSubmit}> */}
      <UserInputSearch
        minLength={2}
        debounceTimeout={400}
        onChange={e => searchForUsers(e)}
        placeholder='search users'
      />
      {users.length > 0 && (
        <ul>
          {users.map((user, i) => (
            <UsersElement key={user._id}>
              <p>
                <UsersIcon onClick={() => addUser(i)}>
                  <i className='fas fa-plus'></i>
                </UsersIcon>
                {user.name}
              </p>
            </UsersElement>
          ))}
        </ul>
      )}
      {/* </form> */}
    </div>
  );
};

export default connect(
  null,
  { addUserToProject }
)(UsersSearch);
