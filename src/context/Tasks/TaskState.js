import React, { useReducer } from "react";
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK,
  REMOVE_MARKED,
  GET_TASKS
} from '../types';

const TaskState = props => {
  const initialState = {
    tasks: [],
    completedTasks: []
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

  return <TaskContext.Provider
    value={{
      tasks: state.tasks,
      completedTasks: state.completedTasks,
      addTask,
      markTask,
      deleteTask,
      deleteMarked
    }}
  >
    {props.children}
  </TaskContext.Provider>
}

export default TaskState;