import axios from "axios";
import uuid from "uuid";

import { CREATE_NEW_PROJECT } from "./types";

export const createNewProject = name => async dispatch => {
  try {
    debugger;
    const firstColumnId = uuid.v4();
    const secondColumnId = uuid.v4();
    const thirdColumnId = uuid.v4();

    const body = {
      name,
      board: {
        tasks: [],
        columns: [
          {
            id: firstColumnId,
            title: "To do",
            taskIds: []
          },
          {
            id: secondColumnId,
            title: "In progress",
            taskIds: []
          },
          {
            id: thirdColumnId,
            title: "Finished",
            taskIds: []
          }
        ],
        columnOrder: [firstColumnId, secondColumnId, thirdColumnId]
      }
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post(`/api/project`, body, config);
    console.log(res.data);
    const id = res.data._id;

    dispatch({
      type: CREATE_NEW_PROJECT,
      payload: id
    });

    return id;
  } catch (err) {
    console.log(err);
  }
};
