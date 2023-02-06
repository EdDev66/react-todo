import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK,
  GET_TASKS
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case MARK_TASK:
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.payload]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: action.payload
      }

    default:
      return state
  }
}