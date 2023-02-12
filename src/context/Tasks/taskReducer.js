import {
  ADD_TASK,
  REMOVE_TASK,
  MARK_TASK,
  REMOVE_MARKED,
  SET_ACTIVE_TASK,
  EDIT_TASK
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case MARK_TASK:
      const filteredTasks = state.tasks.filter(el => el.id !== action.payload.id)

      return {
        ...state,
        tasks: filteredTasks,
        completedTasks: [...state.completedTasks, action.payload]
      }
    case REMOVE_TASK:
      return {
        ...state,
        tasks: action.payload
      }
    case REMOVE_MARKED:
      return {
        ...state,
        completedTasks: action.payload
      }
    case SET_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.payload
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if(task.id === action.payload.id) {
            return { ...task, ...action.payload }
          }
          return task;
        })
      }

    default:
      return state
  }
}