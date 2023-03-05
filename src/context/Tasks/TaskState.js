import React, { useReducer } from "react";
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { database } from '../../firebase';
import { ref, update, push, child, onValue, get, set, remove } from "firebase/database";
import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK,
  REMOVE_MARKED,
  SET_ACTIVE_TASK,
  EDIT_TASK,
  FETCH_TASKS,
  FETCH_COMPLETED_TASKS,
  CLEAR_TASKS
} from '../types';

const TaskState = props => {
  const initialState = {
    tasks: [],
    completedTasks: [],
    activeTask: {}
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // FETCH TASKS
  const fetchTasks = (userId) => {
    const tasksListRef = ref(database, `users/${userId}/tasks/active`);

    get(tasksListRef).then((snapshot) => {
      const data = snapshot.val();
      const uniqueValues = new Set(Object.values(data));
      uniqueValues.forEach((task) => {
        dispatch({ type: FETCH_TASKS, payload: task })
      })
    }).catch((err) => console.log(err.message))
   
  }

  // FETCH MARKED TASKS
  const fetchMarked = (userId) => {
    const tasksRef = ref(database, `users/${userId}/tasks/completed`);

    get(tasksRef).then((snapshot) => {
      const data = snapshot.val();
      const uniqueValues = new Set(Object.values(data));
      uniqueValues.forEach((task) => {
        dispatch({ type: FETCH_TASKS, payload: task })
      })
    }).catch((err) => console.log(err.message))
  }

  // ADD TASK
  const addTask = (task, userId) => {

    const newTaskKey = push(child(ref(database), `users/${userId}/tasks/active`)).key;
    const userRef = ref(database, `users/${userId}/tasks/active/${newTaskKey}`);

    task.id = newTaskKey;

    update(userRef, task)
    .then(() => {
      console.log('Task added')
    })
    .catch((err) => {
      console.log(err.message)
    })

    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // MARK TASK
  const markTask = async (id, userId) => {

    const selectedTask = state.tasks.find(el => el.id === id)
    const selectedCopy = selectedTask;
    selectedCopy.completed = !selectedCopy.completed;

    // Get task reference
    const taskRef = ref(database, `users/${userId}/tasks/active/${id}`);
    const snapshot = await get(taskRef);
    const task = snapshot.val();

    // Add task to completed
    const newTaskKey = task.id
    set(ref(database, `users/${userId}/tasks/completed/${newTaskKey}`), task);

    // Remove task from active
    remove(taskRef);

    console.log('task added')
    
    dispatch({
      type: MARK_TASK,
      payload: selectedCopy
    })
  }

  // DELETE TASK
  const deleteTask = (userId, id) => {
    const updatedTasks = state.tasks.filter(item => item.id !== id)

    const taskRef = ref(database, `users/${userId}/tasks/active/${id}`);
    console.log(taskRef)
    remove(taskRef)
    .then(() => {
      console.log('Item removed!')
    })
    .catch((err) => {
      console.error(err.message)
    })
    
    
    dispatch({
      type: REMOVE_TASK,
      payload: updatedTasks
    })
  }

  // DELETE MARKED
  const deleteMarked = (userId, id) => {
    const updatedTasks = state.completedTasks.filter(task => task.id !== id)

    const taskRef = ref(database, `users/${userId}/tasks/completed/${id}`);
    console.log(taskRef)
    remove(taskRef)
    .then(() => {
      console.log('Item removed!')
    })
    .catch((err) => {
      console.error(err.message)
    })

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

    const taskRef = ref(database, `users/${task.userId}/tasks/active`)

    get(taskRef)
    .then((snapshot) => {
      const data = snapshot.val();

      data[task.id] = {
        ...data[task.id],
          task: task.task,
          priority: task.priority,
          dueDate: task.dueDate
      }
      console.log(data);

      set(taskRef, data, { merge: true })
      .then(() => console.log('Task updated!'))
    })
   

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
      fetchTasks,
      fetchMarked,
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