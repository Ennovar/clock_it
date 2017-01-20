/*
 *
 * ClockInPage reducer
 *
 */

import {
  DEFAULT_ACTION,
  GET_PROJECTS_SUCCESS_ACTION,
  GET_TASKS_SUCCESS_ACTION,
  TASK_CHANGE_ACTION,
  PROJECT_CHANGE_ACTION,
} from './constants';

const initialState = {
  projects: [],
  tasks: [],
};

function clockInPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_PROJECTS_SUCCESS_ACTION:
      return { ...state, projects: action.projects };
    case GET_TASKS_SUCCESS_ACTION:
      return { ...state, tasks: action.tasks };
    case TASK_CHANGE_ACTION:
      return { ...state, taskId: action.id };
    case PROJECT_CHANGE_ACTION:
      return { ...state, taskId: action.id };
    default:
      return state;
  }
}

export default clockInPageReducer;
