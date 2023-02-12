import React, { useReducer } from "react";
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK,
  REMOVE_MARKED,
  SET_ACTIVE_TASK,
  EDIT_TASK
} from '../types';

const TaskState = props => {
  const initialState = {
    tasks: [],
    completedTasks: [],
    activeTask: {}
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // ADD TASK
  const addTask = (task) => {

    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // MARK TASK
  const markTask = (id) => {

    const selectedTask = state.tasks.find(el => el.id === id)
    const selectedCopy = selectedTask;
    selectedCopy.completed = !selectedCopy.completed;
    
    dispatch({
      type: MARK_TASK,
      payload: selectedCopy
    })
  }

  // DELETE TASK
  const deleteTask = (id) => {
    const updatedTasks = state.tasks.filter(task => task.id !== id)
    
    dispatch({
      type: REMOVE_TASK,
      payload: updatedTasks
    })
  }

  // DELETE MARKED
  const deleteMarked = (id) => {
    const updatedTasks = state.completedTasks.filter(task => task.id !== id)

    dispatch({
      type: REMOVE_MARKED,
      payload: updatedTasks
    })
  }

  // SET ACTIVE TASK
  const setActiveTask = (id) => {
    const selectedTask = state.tasks.find(el => el.id === id)

    dispatch({
      type: SET_ACTIVE_TASK,
      payload: selectedTask
    })
  }

  // EDIT TASK
  const editTask = (task) => {
    // const selectedTask = state.tasks.find(el => el.id === task.id);
    // const selectedCopy = selectedTask;
    // selectedCopy.task = task.task;
    // selectedCopy.priority = task.priority;
    // selectedCopy.dueDate = task.dueDate;

    dispatch({
      type: EDIT_TASK,
      payload: task
    })
  }

  return <TaskContext.Provider
    value={{
      tasks: state.tasks,
      completedTasks: state.completedTasks,
      activeTask: state.activeTask,
      addTask,
      markTask,
      deleteTask,
      deleteMarked,
      setActiveTask,
      editTask
    }}
  >
    {props.children}
  </TaskContext.Provider>
}

export default TaskState;