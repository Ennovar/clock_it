/*
 *
 * ClockInPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CLOCK_IN_ACTION,
  PROJECT_CHANGE_ACTION,
  TASK_CHANGE_ACTION,
  GET_PROJECTS_ACTION,
  GET_PROJECTS_SUCCESS_ACTION,
  GET_TASKS_SUCCESS_ACTION,
  GET_TASKS_ACTION,
  CLOCK_IN_SUCCESS_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function clockInAction() {
  return {
    type: CLOCK_IN_ACTION,
  };
}
export function clockInSuccessAction(timeEntry) {
  return {
    type: CLOCK_IN_SUCCESS_ACTION,
    timeEntry,
  };
}
export function projectChangeAction(id) {
  return {
    type: PROJECT_CHANGE_ACTION,
    id,
  };
}
export function getProjectsAction() {
  return {
    type: GET_PROJECTS_ACTION,
  };
}
export function getProjectsSuccessAction(projects) {
  return {
    type: GET_PROJECTS_SUCCESS_ACTION,
    projects,
  };
}
export function getTasksSuccessAction(tasks) {
  return {
    type: GET_TASKS_SUCCESS_ACTION,
    tasks,
  };
}
export function getTasksAction() {
  return {
    type: GET_TASKS_ACTION,
  };
}
export function taskChangeAction(id) {
  return {
    type: TASK_CHANGE_ACTION,
    id,
  };
}
