import { httpClient } from "src/utils/Api";

const TaskService = {
  async GetTasks(token) {
    return await httpClient(token).get("tasks");
  },
  async AddTask(values, token) {
    return await httpClient(token).post("add/task", values);
  },
  async DeleteTask(token) {
    return await httpClient(token).delete(`delete/tasks/${task}`); 
  },
  async UpdateTask(values, token) {
    return await httpClient(token).put(`update/tasks/${task}`, values);
  },
};

export default TaskService;
