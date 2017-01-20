import axios from 'axios';
const BASE_URL = 'http://0.0.0.0:9999';
export default class Api {
  static getTimeEntries() {
    return axios({
      url: `${BASE_URL}/time_entries`,
    });
  }
  static createTimeEntry(taskId) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/time_entries`,
      data: {
        time_entry: {
          task_id: taskId,
        },
      },
    });
  }
  static clockOutTimeEntry(id) {
    return axios({
      method: 'put',
      url: `${BASE_URL}/time_entries/${id}`,
    });
  }
  static getProjects() {
    return axios({
      url: `${BASE_URL}/projects`,
    });
  }
  static getTasks() {
    return axios({
      url: `${BASE_URL}/tasks`,
    });
  }
  static userLogin(username, password) {
    return axios({
      method: 'post',
      url: `${BASE_URL}/auth/sign_in`,
      data: {
        email: username,
        password,
      }
    });
  }
}
